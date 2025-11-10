import { expect, test } from "@playwright/test";

test.describe("Internationalization", () => {
  test("should display content in English", async ({ page }) => {
    await page.goto("/en");
    await expect(
      page.getByRole("heading", { name: /Welcome to Next.js SaaS Starter/i }),
    ).toBeVisible();
  });

  test("should display content in Chinese", async ({ page }) => {
    await page.goto("/zh");
    await expect(
      page.getByRole("heading", { name: /欢迎使用 Next.js SaaS 启动模板/i }),
    ).toBeVisible();
  });

  test("should redirect from root to default locale", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/(en|zh)/);
  });
});
