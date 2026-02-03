// مسیر: QA/tests/home.spec.ts
import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage'; // اتصال به فایل مدل

test('بررسی نویگیشن با الگوی POM', async ({ page }) => {
  // ساخت نمونه از کلاس صفحه اصلی
  const home = new HomePage(page);

  // اجرای سناریو به زبان ساده
  await home.goto();
  await home.navigateToAbout();
  
  // بررسی نهایی
  await home.verifyExperienceVisible();
});