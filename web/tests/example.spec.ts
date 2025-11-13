import { test, expect } from "@playwright/test";

test("home page title", async ({ page }) => {
	// Start test by navigating to your URL
	await page.goto("http://localhost:5173/");

	// Check the page title
	await expect(page).toHaveTitle(/BerriPi React Router App/);
});

test("home page heading", async ({ page }) => {
	// Start test by navigating to your URL
	await page.goto("http://localhost:5173/");

	// Check the H1 text in the Button Component
	const heading = page.getByRole("heading", { name: "BerryPi" });
	await expect(heading).toBeVisible();
});

test("fetch button exists and displays fetched message", async ({ page }) => {
	// Start test by navigating to your URL
	await page.goto("http://localhost:5173/");

	// Get the button by its role and the name

	const fetchButton = page.getByRole("button", { name: "Fetch Data" });
	await expect(fetchButton).toBeVisible();

	// Click and locate the button to fetch data
	await fetchButton.click();

	// Wait for the paragraph with the fetched message to appear
	const message = page.locator("article p");
	await expect(message).toBeVisible();

	// checks the text content of the <p> tag to be whats expected from the API
	await expect(message).toHaveText(/Welcome to the BerriServer!/);
});
