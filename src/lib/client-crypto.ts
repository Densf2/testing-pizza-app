// Client-side encryption utilities using Web Crypto API

/**
 * Import RSA public key for encryption
 */
async function importPublicKey(pemKey: string): Promise<CryptoKey> {
  // Remove PEM headers and newlines, get just the base64 content
  const pemContents = pemKey
    .replace(/-----BEGIN PUBLIC KEY-----/g, "")
    .replace(/-----END PUBLIC KEY-----/g, "")
    .replace(/[\r\n\s]/g, "");

  // Decode base64 to binary
  const binaryString = atob(pemContents);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return crypto.subtle.importKey(
    "spki",
    bytes.buffer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    false,
    ["encrypt"]
  );
}

/**
 * Encrypt data using RSA-OAEP with the server's public key
 */
export async function encryptWithPublicKey(
  data: string,
  publicKeyPem: string
): Promise<string> {
  const publicKey = await importPublicKey(publicKeyPem);
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);

  const encryptedBuffer = await crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    dataBuffer
  );

  // Convert ArrayBuffer to base64
  const bytes = new Uint8Array(encryptedBuffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Encrypt login credentials
 */
export async function encryptCredentials(
  email: string,
  password: string,
  publicKeyPem: string
): Promise<{ encryptedEmail: string; encryptedPassword: string }> {
  const [encryptedEmail, encryptedPassword] = await Promise.all([
    encryptWithPublicKey(email, publicKeyPem),
    encryptWithPublicKey(password, publicKeyPem),
  ]);

  return { encryptedEmail, encryptedPassword };
}

/**
 * Fetch the server's public key (always fetch fresh to avoid stale keys)
 */
export async function fetchPublicKey(): Promise<string> {
  const response = await fetch("/api/auth/public-key", {
    cache: "no-store", // Don't cache to ensure we always get the current key
  });
  if (!response.ok) {
    throw new Error("Failed to fetch public key");
  }
  const data = await response.json();
  return data.publicKey;
}
