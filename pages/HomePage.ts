// مسیر: QA/pages/HomePage.ts
import { type Page, type Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly aboutButton: Locator;
  readonly experienceHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    // تعریف المنت‌ها (لوکیتورها)
    // نکته: اگر متن دکمه در سایت شما فرق دارد، اینجا اصلاح کنید
    this.aboutButton = page.getByRole('button', { name: 'About' });
    // اضافه کردن exact: true باعث می‌شود فقط دومی را پیدا کند
    this.experienceHeading = page.getByRole('heading', { name: 'Experience', exact: true }); 
  }

  // اکشن: باز کردن صفحه
  async goto() {
    await this.page.goto('https://mohhsen.com/');
  }

  // اکشن: رفتن به بخش درباره ما
  async navigateToAbout() {
    await this.aboutButton.click();
  }

  // اکشن: بررسی (Assertion)
  async verifyExperienceVisible() {
    await expect(this.experienceHeading).toBeVisible();
  }
}