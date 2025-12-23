import { NextRequest, NextResponse } from "next/server";
import { db, users } from "@/lib/db";
import { verifyPassword, setSessionCookie } from "@/lib/auth";
import { decryptWithPrivateKey } from "@/lib/crypto";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { encryptedEmail, encryptedPassword, email, password } = body;

    let decryptedEmail: string;
    let decryptedPassword: string;

    // Support both encrypted and non-encrypted requests (for backward compatibility)
    if (encryptedEmail && encryptedPassword) {
      // Decrypt the credentials
      try {
        decryptedEmail = decryptWithPrivateKey(encryptedEmail);
        decryptedPassword = decryptWithPrivateKey(encryptedPassword);
      } catch (decryptError) {
        console.error("Decryption error:", decryptError);
        return NextResponse.json(
          { error: "Invalid encrypted data" },
          { status: 400 }
        );
      }
    } else if (email && password) {
      // Fallback for non-encrypted requests (development/testing)
      decryptedEmail = email;
      decryptedPassword = password;
    } else {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find user by email
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, decryptedEmail.toLowerCase()))
      .limit(1);

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await verifyPassword(
      decryptedPassword,
      user.password
    );

    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Set session cookie
    await setSessionCookie(user.id);

    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "An error occurred during login" },
      { status: 500 }
    );
  }
}
