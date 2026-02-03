import { test, expect } from '@playwright/test';

test('تست بصری', async ({ page }) => {
  await page.goto('/');
  // این کد یعنی: عکس بگیر و اگر نداریم، ذخیره‌اش کن
  await expect(page).toHaveScreenshot('home-page.png');
});