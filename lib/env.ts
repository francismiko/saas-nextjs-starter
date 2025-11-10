import { z } from "zod";

/**
 * Environment variables schema
 *
 * This file validates all environment variables used in the application.
 * Add new environment variables here to ensure type safety.
 */

const envSchema = z.object({
  // Node environment
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // Database
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  TURSO_DATABASE_URL: z.string().optional(),
  TURSO_AUTH_TOKEN: z.string().optional(),

  // AI SDK
  OPENROUTER_API_KEY: z.string().optional(),
});

/**
 * Server-side environment variables
 *
 * ⚠️ IMPORTANT: Only use this on the server side (API routes, Server Components, Server Actions)
 * Never expose server-side env variables to the client
 */
function getServerEnv() {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors,
    );
    throw new Error("Invalid environment variables");
  }

  return parsed.data;
}

/**
 * Type-safe environment variables
 *
 * Usage:
 * ```typescript
 * import { env } from '@/lib/env'
 *
 * const dbUrl = env.DATABASE_URL
 * const apiKey = env.OPENROUTER_API_KEY
 * ```
 */
export const env = getServerEnv();

/**
 * Type for environment variables
 */
export type Env = z.infer<typeof envSchema>;
