import type { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { POST } from "./route";

describe("API /api/example", () => {
  it("validates input correctly", async () => {
    const request = new Request("http://localhost:3000/api/example", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "John Doe" }),
    });

    const response = await POST(request as unknown as NextRequest);
    const data = await response.json();

    expect(data.success).toBe(true);
    expect(data.data.name).toBe("John Doe");
  });

  it("returns error for invalid input", async () => {
    const request = new Request("http://localhost:3000/api/example", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "A" }), // Too short
    });

    const response = await POST(request as unknown as NextRequest);
    const data = await response.json();

    expect(data.success).toBe(false);
    expect(data.errors).toBeDefined();
  });
});
