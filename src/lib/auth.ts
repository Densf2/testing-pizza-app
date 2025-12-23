import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const SALT_ROUNDS = 10;
const SESSION_COOKIE_NAME = "pizza_session";

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Create a simple session token
 * In production, consider using JWT or a proper session library
 */
export function createSessionToken(userId: number): string {
  const payload = {
    userId,
    createdAt: Date.now(),
  };
  // Simple base64 encoding - in production use JWT
  return Buffer.from(JSON.stringify(payload)).toString("base64");
}

/**
 * Parse a session token
 */
export function parseSessionToken(
  token: string
): { userId: number; createdAt: number } | null {
  try {
    const payload = JSON.parse(Buffer.from(token, "base64").toString("utf-8"));
    if (payload.userId && payload.createdAt) {
      return payload;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Set session cookie
 */
export async function setSessionCookie(userId: number): Promise<void> {
  const token = createSessionToken(userId);
  const cookieStore = await cookies();
  
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
}

/**
 * Get current session from cookies
 */
export async function getSession(): Promise<{ userId: number } | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  const payload = parseSessionToken(token);
  if (!payload) {
    return null;
  }

  // Check if session is expired (7 days)
  const oneWeek = 60 * 60 * 24 * 7 * 1000;
  if (Date.now() - payload.createdAt > oneWeek) {
    return null;
  }

  return { userId: payload.userId };
}

/**
 * Clear session cookie (logout)
 */
export async function clearSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
