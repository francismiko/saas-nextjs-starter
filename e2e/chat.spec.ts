import { expect, test } from "@playwright/test";

test.describe("AI Chat Page", () => {
  test("should display chat interface", async ({ page }) => {
    await page.goto("/en/chat");

    // Check for page title
    await expect(
      page.getByRole("heading", { name: "AI Chat Demo" }),
    ).toBeVisible();

    // Check for input field
    const input = page.getByPlaceholder("Type your message...");
    await expect(input).toBeVisible();

    // Check for send button
    const sendButton = page.getByRole("button", { name: "Send" });
    await expect(sendButton).toBeVisible();
  });

  test("should display empty state message", async ({ page }) => {
    await page.goto("/en/chat");

    await expect(page.getByText("Start a conversation with AI")).toBeVisible();
  });

  test("send button should be disabled when input is empty", async ({
    page,
  }) => {
    await page.goto("/en/chat");

    const sendButton = page.getByRole("button", { name: "Send" });
    await expect(sendButton).toBeDisabled();
  });

  test("send button should be enabled when input has text", async ({
    page,
  }) => {
    await page.goto("/en/chat");

    const input = page.getByPlaceholder("Type your message...");
    const sendButton = page.getByRole("button", { name: "Send" });

    await input.fill("Hello");
    await expect(sendButton).toBeEnabled();
  });

  test("should clear input after sending message", async ({ page }) => {
    await page.goto("/en/chat");

    const input = page.getByPlaceholder("Type your message...");
    const sendButton = page.getByRole("button", { name: "Send" });

    await input.fill("Test message");
    await sendButton.click();

    // Input should be cleared
    await expect(input).toHaveValue("");
  });

  test("input should be disabled while loading", async ({ page }) => {
    await page.goto("/en/chat");

    const input = page.getByPlaceholder("Type your message...");
    const sendButton = page.getByRole("button", { name: "Send" });

    await input.fill("Test");
    await sendButton.click();

    // Check if input is disabled during loading
    await expect(input).toBeDisabled();
  });

  test("should display user message in chat", async ({ page }) => {
    await page.goto("/en/chat");

    const input = page.getByPlaceholder("Type your message...");
    const sendButton = page.getByRole("button", { name: "Send" });

    await input.fill("Hello AI!");
    await sendButton.click();

    // Check for user message
    await expect(page.getByText("You")).toBeVisible();
    await expect(page.getByText("Hello AI!")).toBeVisible();
  });

  test("should work in Chinese locale", async ({ page }) => {
    await page.goto("/zh/chat");

    await expect(
      page.getByRole("heading", { name: "AI Chat Demo" }),
    ).toBeVisible();

    const input = page.getByPlaceholder("Type your message...");
    await expect(input).toBeVisible();
  });

  test("navigation should work between locales", async ({ page }) => {
    await page.goto("/en/chat");
    await expect(page).toHaveURL(/\/en\/chat/);

    await page.goto("/zh/chat");
    await expect(page).toHaveURL(/\/zh\/chat/);
  });
});
