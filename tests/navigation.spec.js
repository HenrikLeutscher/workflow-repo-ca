import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("User can successfully navigate to the first venue page from venue list on home page", async ({
    page,
  }) => {
    await page.goto("/");

    await page.waitForSelector("#venue-container a");
    await page.locator("#venue-container a").first().click();

    // Expecting the heading to contain "Venue details:"
    await expect(page.getByRole("heading")).toContainText("Venue details");
  });
});
