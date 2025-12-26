import { NextResponse } from "next/server";
import { getPublicKey } from "@/lib/crypto";

export async function GET() {
  try {
    const publicKey = getPublicKey();
    return NextResponse.json({ publicKey });
  } catch (error) {
    console.error("Error getting public key:", error);
    return NextResponse.json(
      { error: "Failed to get public key" },
      { status: 500 }
    );
  }
}
