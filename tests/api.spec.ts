import { test, expect } from '@playwright/test';

test.describe('API tests (without browser)', () => {

  // Scenario 1: Check health of the Mohsen site server
  test('should return 200 for the Mohsen site', async ({ request }) => {
    // Send GET request
    const response = await request.get('https://mohhsen.com/');

    // Verify the request was successful (Status 200-299)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    // Log the server Date header (useful for debugging)
    console.log(`Date header: ${await response.headers()['date']}`);
  });

  // Scenario 2: Test creating data (Create) on a public API
  test('should be able to create a new post', async ({ request }) => {
    const newPost = {
      title: 'Mohsen QA Expert',
      body: 'Learning Playwright API testing',
      userId: 1,
    };

    // Send POST request with data
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: newPost
    });

    // 1. Verify success
    expect(response.status()).toBe(201); // 201 = Created

    // 2. Verify response body
    const jsonResponse = await response.json();
    console.log('Response:', jsonResponse);

    // Check the server returned the title we sent
    expect(jsonResponse.title).toBe('Mohsen QA Expert');
  });

});