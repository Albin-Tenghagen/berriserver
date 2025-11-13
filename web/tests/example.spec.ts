import { test, expect } from "@playwright/test";

test("home page title", async ({ page }) => {
	// Go to your local React app
	await page.goto("http://localhost:5173/");

	// Check the page title
	await expect(page).toHaveTitle(/BerriPi React Router App/);
});

test("home page heading", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	// Check the H1 text rendered by Button
	const heading = page.getByRole("heading", { name: "BerryPi" });
	await expect(heading).toBeVisible();
});

test("fetch button exists and can be clicked", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const fetchButton = page.getByRole("button", { name: "Fetch Data" });
	await expect(fetchButton).toBeVisible();

	// Optionally click it (it will try to fetch your backend)
	await fetchButton.click();
});
