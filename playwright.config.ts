import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // پوشه تست‌ها
  testDir: './tests',
  
  // اجرای موازی تست‌ها برای سرعت بیشتر
  fullyParallel: true,

  // در CI تست‌ها را یکی‌یکی اجرا کن که تداخل نکنند، در سیستم خودت موازی
  workers: process.env.CI ? 1 : undefined,

  // تنظیمات گزارش‌دهی (هم در ترمینال لیست کن، هم فایل HTML بساز)
  reporter: [['list'], ['html']],

  // تنظیمات مشترک برای همه تست‌ها
  use: {
    // آدرس پیش‌فرض سایت شما (که دیگر در تست‌ها تکرار نکنیم)
    baseURL: 'https://mohhsen.com',

    // جمع‌آوری اطلاعات دیباگ (Trace) فقط وقتی تست فیل شد
    trace: 'on-first-retry',
    
    // گرفتن اسکرین‌شات فقط وقتی تست فیل شد
    screenshot: 'only-on-failure',
  },

  // تنظیمات مرورگرها
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // اگر خواستید در فایرفاکس هم تست کنید این را از کامنت درآورید
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
});