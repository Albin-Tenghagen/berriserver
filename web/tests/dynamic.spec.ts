import { test, expect } from "@playwright/test";

test("Button visually responds to focus and hover", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const button = page.getByRole("button", { name: "Fetch Data" });

	//1 Capture initial appearance in memory
	const defaultScreenshot = await button.screenshot();

	//2 Focus state
	await button.focus();
	await page.waitForTimeout(50);
	const focusScreenshot = await button.screenshot();
	expect(focusScreenshot).not.toEqual(defaultScreenshot);

	//3 Hover state
	await button.hover();
	await page.waitForTimeout(50);
	const hoverScreenshot = await button.screenshot();
	expect(hoverScreenshot).not.toEqual(focusScreenshot);
});
// Hitta nav
test("Hitta Link is reactive to the hover status", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const hittaLink = page.locator("main header a", { hasText: "Hitta" });
	const defaultScreenshot = await hittaLink.screenshot();

	await hittaLink.focus();
	await page.waitForTimeout(200);
	const hoverScreenshot = await hittaLink.screenshot();
	expect(hoverScreenshot).not.toEqual(defaultScreenshot);
});
// Byggtjänster nav
test("Byggtjänster Link is reactive to the hover status", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const byggtjänsterLink = page.locator("main header a", {
		hasText: "Byggtjänster",
	});
	const defaultScreenshot = await byggtjänsterLink.screenshot();

	await byggtjänsterLink.focus();
	await page.waitForTimeout(200);
	const hoverScreenshot = await byggtjänsterLink.screenshot();
	expect(hoverScreenshot).not.toEqual(defaultScreenshot);
});
// Rådgivning nav
test("Rådgivning Link is reactive to the hover status", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const rådgivningLink = page.locator("main header a", {
		hasText: "Rådgivning",
	});
	const defaultScreenshot = await rådgivningLink.screenshot();

	await rådgivningLink.focus();
	await page.waitForTimeout(200);
	const hoverScreenshot = await rådgivningLink.screenshot();
	expect(hoverScreenshot).not.toEqual(defaultScreenshot);
});
