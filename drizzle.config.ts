import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  //   out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.DATABASE_URL ||
      "postgresql://pizza_user:pizza_pass@localhost:5432/pizza_db",
    // url: "postgresql://pizza_user:pizza_pass@localhost:5432/pizza_db",
  },
  verbose: true,
  strict: true,
});
