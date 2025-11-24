import { test, expect } from "@playwright/test";

test("Measuring page load times", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const perf = await page.evaluate(() => JSON.stringify(performance.timing));
	const timings = JSON.parse(perf);

	const loadTime = timings.loadEventEnd - timings.navigationStart;

	expect(loadTime).toBeLessThan(3000);
});
