// Path: QA/pages/HomePage.ts
import { type Page, type Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly aboutButton: Locator;
  readonly experienceHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    // Define elements (locators)
    // Note: If the button text on your site is different, adjust here
    this.aboutButton = page.getByRole('button', { name: 'About' });
    // Adding exact: true makes it match only the precise heading
    this.experienceHeading = page.getByRole('heading', { name: 'Experience', exact: true }); 
  }

  // Action: open the page
  async goto() {
    await this.page.goto('https://mohhsen.com/');
  }

  // Action: navigate to the About section
  async navigateToAbout() {
    await this.aboutButton.click();
  }

  // Action: assertion
  async verifyExperienceVisible() {
    await expect(this.experienceHeading).toBeVisible();
  }
}