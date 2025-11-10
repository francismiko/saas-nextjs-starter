import { beforeEach, describe, expect, it, vi } from "vitest";

describe("Environment Variables", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("should load valid environment variables", async () => {
    process.env.NODE_ENV = "test";
    process.env.DATABASE_URL = "file:test.db";

    const { env } = await import("./env");

    expect(env.NODE_ENV).toBe("test");
    expect(env.DATABASE_URL).toBe("file:test.db");
  });

  it("should use default NODE_ENV if not provided", async () => {
    process.env.DATABASE_URL = "file:test.db";
    // biome-ignore lint/performance/noDelete: Testing environment variables
    delete process.env.NODE_ENV;

    const { env } = await import("./env");

    expect(env.NODE_ENV).toBe("development");
  });

  it("should throw error if DATABASE_URL is missing", async () => {
    // biome-ignore lint/performance/noDelete: Testing environment variables
    delete process.env.DATABASE_URL;

    await expect(async () => {
      await import("./env");
    }).rejects.toThrow("Invalid environment variables");
  });

  it("should allow optional OPENROUTER_API_KEY", async () => {
    process.env.DATABASE_URL = "file:test.db";
    // biome-ignore lint/performance/noDelete: Testing environment variables
    delete process.env.OPENROUTER_API_KEY;

    const { env } = await import("./env");

    expect(env.OPENROUTER_API_KEY).toBeUndefined();
  });

  it("should accept valid OPENROUTER_API_KEY when provided", async () => {
    process.env.DATABASE_URL = "file:test.db";
    process.env.OPENROUTER_API_KEY = "sk-test-key";

    const { env } = await import("./env");

    expect(env.OPENROUTER_API_KEY).toBe("sk-test-key");
  });
});
