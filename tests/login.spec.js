import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("User can successfully log in with valid credentials from environment variables.", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.locator(`input[name="email"]`).fill(process.env.TEST_USER_EMAIL);
    await page
      .locator(`input[name="password"]`)
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();

    // Waits for the redirect
    await page.waitForURL("/");

    // Expect to see the logout button on main page to become visible after login
    await expect(page.locator("#logoutButton")).toBeVisible();
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.locator(`input[name="email"]`).fill(process.env.TEST_USER_EMAIL);
    await page.locator(`input[name="password"]`).fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).click();

    // Expected to see the "message-container" to become visible containing an error message
    await expect(page.locator("#message-container")).toBeVisible();
  });
});
