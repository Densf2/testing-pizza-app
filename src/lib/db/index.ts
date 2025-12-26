import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

// Use globalThis to persist client/db across HMR reloads in dev
const globalForDb = globalThis as unknown as {
  queryClient?: ReturnType<typeof postgres>;
  db?: ReturnType<typeof drizzle<typeof schema>>;
};

if (!globalForDb.queryClient) {
  globalForDb.queryClient = postgres(process.env.DATABASE_URL);
}
if (!globalForDb.db) {
  globalForDb.db = drizzle(globalForDb.queryClient, { schema });
}

export const db = globalForDb.db;

// Export schema for use in queries
export * from "./schema";
