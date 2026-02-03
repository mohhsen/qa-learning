import { test, expect } from '@playwright/test';

test.describe('Network & Performance Tests', () => {

  test('Should have no broken links or images (ignoring analytics)', async ({ page }) => {
    const failedRequests: string[] = [];

    // List of domains to ignore (e.g., analytics, ads)
    const ignoredDomains = ['google-analytics.com', 'doubleclick.net'];

    // Listener for failed requests
    page.on('requestfailed', request => {
      const url = request.url();
      // If the URL contains an ignored domain, skip it
      if (ignoredDomains.some(domain => url.includes(domain))) return;
      
      failedRequests.push(`${url} (Failed)`);
    });

    // Listener for responses with error status codes
    page.on('response', response => {
      const url = response.url();
      if (ignoredDomains.some(domain => url.includes(domain))) return;

      // Check for 400+ status codes (404, 500, etc.)
      if (response.status() >= 400) {
        failedRequests.push(`${url} (Status: ${response.status()})`);
      }
    });

    await page.goto('/');
    
    // Wait for network to be idle to ensure all resources are loaded
    await page.waitForLoadState('networkidle');

    // Assertion: Ensure no critical requests failed
    expect(failedRequests, `Found broken resources: ${failedRequests.join(', ')}`).toHaveLength(0);
  });

  test('Should load the homepage under 15 seconds', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/');
    
    const duration = Date.now() - startTime;
    console.log(`Page Load Time: ${duration}ms`);

    // Assertion: Load time should be reasonable (under 15s)
    expect(duration).toBeLessThan(15000);
  });

});