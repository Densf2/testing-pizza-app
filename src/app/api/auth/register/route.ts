import { NextRequest, NextResponse } from "next/server";
import { db, users } from "@/lib/db";
import { hashPassword, setSessionCookie } from "@/lib/auth";
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

    if (decryptedPassword.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, decryptedEmail.toLowerCase()))
      .limit(1);

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(decryptedPassword);

    // Create user
    const [newUser] = await db
      .insert(users)
      .values({
        email: decryptedEmail.toLowerCase(),
        name: decryptedEmail.split("@")[0], // Use email prefix as default name
        password: hashedPassword,
      })
      .returning({ id: users.id, email: users.email, name: users.name });

    // Set session cookie
    await setSessionCookie(newUser.id);

    return NextResponse.json(
      {
        message: "Registration successful",
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
