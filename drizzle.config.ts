import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  //   out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: (() => {
      if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL environment variable is not set.");
      }
      return process.env.DATABASE_URL;
    })(),
  },
  verbose: true,
  strict: true,
});
