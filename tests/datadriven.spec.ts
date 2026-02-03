import { test, expect } from '@playwright/test';

// Test Data: Define navigation links and expected headers
const sections = [
  { navText: 'About', expectedHeading: 'About Me' },
  { navText: 'Experience', expectedHeading: 'Experience' },
];

test.describe('Single Page Navigation Tests', () => {
  // Set viewport to ensure the desktop menu is visible (avoid hamburger menu)
  test.use({ viewport: { width: 1920, height: 1080 } });

  for (const item of sections) {
    
    test(`Should verify navigation to ${item.navText} section`, async ({ page }) => {
      await page.goto('/');

      // Action: Click the navigation item using text
      // Using .first() just in case the text appears in multiple places
      await page.getByText(item.navText, { exact: true }).first().click();

      // Assertion: Verify the section heading is visible
      // FIX: Added { exact: true } to distinguish 'Experience' from '5+ Years Experience'
      const heading = page.getByRole('heading', { name: item.expectedHeading, exact: true });
      await expect(heading).toBeVisible();
    });

  }
});