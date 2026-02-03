import { test, expect } from '@playwright/test';

test.describe('تست‌های API (بدون مرورگر)', () => {

  // سناریو ۱: بررسی سلامت سرور سایت محسن
  test('باید وضعیت سایت محسن ۲۰۰۰ باشد', async ({ request }) => {
    // ارسال درخواست GET
    const response = await request.get('https://mohhsen.com/');

    // بررسی اینکه درخواست موفق بوده (Status 200-299)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    // چاپ کردن سرعت پاسخ‌دهی سرور (برای شما که فنی هستید جذابه)
    console.log(`Time taken: ${await response.headers()['date']}`);
  });

  // سناریو ۲: تست ساخت دیتا (Create) در یک API عمومی
  test('باید بتواند یک پست جدید بسازد', async ({ request }) => {
    const newPost = {
      title: 'Mohsen QA Expert',
      body: 'Learning Playwright API testing',
      userId: 1,
    };

    // ارسال درخواست POST به همراه دیتا
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: newPost
    });

    // ۱. بررسی موفقیت درخواست
    expect(response.status()).toBe(201); // 201 = Created

    // ۲. بررسی دیتای برگشتی (Response Body)
    const jsonResponse = await response.json();
    console.log('Response:', jsonResponse);

    // چک می‌کنیم سرور همان عنوانی که فرستادیم را برگردانده باشد
    expect(jsonResponse.title).toBe('Mohsen QA Expert');
  });

});