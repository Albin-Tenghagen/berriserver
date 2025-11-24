import { test, expect } from "@playwright/test";

test.describe("BerriPi React Router App", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:5173/");
	});

	test("header should be visible", async ({ page }) => {
		const header = page.locator("main header");
		await header.waitFor({ state: "visible" }); // wait until it appears
		await expect(header).toBeVisible();
	});

	test("logo should be visible and navigate home", async ({ page }) => {
		const logo = page.locator("main header a").first();
		await expect(logo).toBeVisible();

		await logo.click();
		await expect(page).toHaveURL("http://localhost:5173/");
	});

	test("Nav bar should contain 3 links", async ({ page }) => {
		await expect(page.locator("main header nav ul li")).toHaveCount(3);
	});

	test("Link navigates to /hitta", async ({ page }) => {
		await page.locator("main header a", { hasText: "Hitta" }).click();
		await expect(page).toHaveURL("http://localhost:5173/hitta");
	});

	test("Rådgivning link navigates to /radgivning", async ({ page }) => {
		await page.locator("main header a", { hasText: "Rådgivning" }).click();
		await expect(page).toHaveURL("http://localhost:5173/radgivning");
	});

	test("Byggtjänster link navigates to /byggtjanster", async ({ page }) => {
		await page.locator("main header a", { hasText: "Byggtjänster" }).click();
		await expect(page).toHaveURL("http://localhost:5173/byggtjanster");
	});
});
