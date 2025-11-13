import { test, expect } from "@playwright/test";

test.describe("User Registration Form", () => {
  test.beforeEach(async ({ page }) => {
    // Replace with your local dev URL or deployed URL
    await page.goto("http://localhost:5173");
  });

  test("should fill and submit the form successfully", async ({ page }) => {
    // Fill name
    await page.fill('input[name="name"]', "John Doe");

    // Fill email
    await page.fill('input[name="email"]', "john@example.com");

    // Fill password
    await page.fill('input[name="password"]', "password123");

    // Fill phone
    await page.fill('input[name="phone"]', "1234567890");

    // Listen for alert
    page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("User registered successfully!");
      await dialog.accept();
    });

    // Submit form
    await page.click('button[type="submit"]');
  });

  test("should show validation errors for empty fields", async ({ page }) => {
    // Submit without filling
    await page.click('button[type="submit"]');

    const name = page.locator('input[name="name"]');
    const email = page.locator('input[name="email"]');
    const password = page.locator('input[name="password"]');
    const phone = page.locator('input[name="phone"]');

    // Cast to HTMLInputElement to access validity
    expect(
      await name.evaluate(
        (el) => (el as HTMLInputElement).validity.valueMissing
      )
    ).toBe(true);
    expect(
      await email.evaluate(
        (el) => (el as HTMLInputElement).validity.valueMissing
      )
    ).toBe(true);
    expect(
      await password.evaluate(
        (el) => (el as HTMLInputElement).validity.valueMissing
      )
    ).toBe(true);
    expect(
      await phone.evaluate(
        (el) => (el as HTMLInputElement).validity.valueMissing
      )
    ).toBe(true);
  });
});
