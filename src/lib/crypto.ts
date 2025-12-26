import crypto from "crypto";

// RSA key pair for encryption
// Store keys in a way that persists across hot reloads in development
const globalForCrypto = globalThis as unknown as {
  rsaKeyPair: { publicKey: string; privateKey: string } | undefined;
};

// Generate or get RSA key pair (persists across hot reloads)
export function getKeyPair(): { publicKey: string; privateKey: string } {
  if (!globalForCrypto.rsaKeyPair) {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
      },
    });
    globalForCrypto.rsaKeyPair = { publicKey, privateKey };
    console.log("Generated new RSA key pair");
  }
  return globalForCrypto.rsaKeyPair;
}

/**
 * Get public key for client-side encryption
 */
export function getPublicKey(): string {
  return getKeyPair().publicKey;
}

/**
 * Decrypt data encrypted with the public key
 */
export function decryptWithPrivateKey(encryptedData: string): string {
  const { privateKey } = getKeyPair();
  const buffer = Buffer.from(encryptedData, "base64");
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    buffer
  );
  return decrypted.toString("utf-8");
}

/**
 * Encrypt data with AES-256-GCM (for symmetric encryption)
 */
export function encryptAES(
  data: string,
  key: Buffer
): { encrypted: string; iv: string; tag: string } {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);

  let encrypted = cipher.update(data, "utf-8", "base64");
  encrypted += cipher.final("base64");

  return {
    encrypted,
    iv: iv.toString("base64"),
    tag: cipher.getAuthTag().toString("base64"),
  };
}

/**
 * Decrypt AES-256-GCM encrypted data
 */
export function decryptAES(
  encryptedData: string,
  key: Buffer,
  iv: string,
  tag: string
): string {
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from(iv, "base64")
  );
  decipher.setAuthTag(Buffer.from(tag, "base64"));

  let decrypted = decipher.update(encryptedData, "base64", "utf-8");
  decrypted += decipher.final("utf-8");

  return decrypted;
}
