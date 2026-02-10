// Path: QA/tests/home.spec.ts
import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage'; // connect to the page model file

test('verify navigation using POM pattern', async ({ page }) => {
  // Instantiate the home page class
  const home = new HomePage(page);

  // Run the scenario in simple steps
  await home.goto();
  await home.navigateToAbout();
  
  // Final assertion
  await home.verifyExperienceVisible();
});