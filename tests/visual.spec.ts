import { test, expect } from '@playwright/test';

test('visual test', async ({ page }) => {
  await page.goto('/');
  // Take a screenshot and save baseline if it's missing
  await expect(page).toHaveScreenshot('home-page.png');
});