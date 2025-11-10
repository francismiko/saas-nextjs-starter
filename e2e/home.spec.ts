import { expect, test } from "@playwright/test";

test.describe("Homepage", () => {
  test("should display title and description", async ({ page }) => {
    await page.goto("/en");

    // Check for title
    await expect(
      page.getByRole("heading", { name: /Welcome to Next.js SaaS Starter/i }),
    ).toBeVisible();

    // Check for description
    await expect(
      page.getByText(/A production-ready starter template/i),
    ).toBeVisible();
  });

  test("counter should work correctly", async ({ page }) => {
    await page.goto("/en");

    // Find counter
    const counter = page.getByText(/Counter: 0/);
    await expect(counter).toBeVisible();

    // Click increment
    await page.getByRole("button", { name: "+" }).click();
    await expect(page.getByText(/Counter: 1/)).toBeVisible();

    // Click decrement
    await page.getByRole("button", { name: "-" }).click();
    await expect(page.getByText(/Counter: 0/)).toBeVisible();
  });

  test("buttons should be visible", async ({ page }) => {
    await page.goto("/en");

    await expect(page.getByRole("button", { name: "Default" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Secondary" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Outline" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Destructive" }),
    ).toBeVisible();
  });
});
