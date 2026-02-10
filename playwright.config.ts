import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Test directory
  testDir: './tests',
  
  // Run tests fully in parallel for speed
  fullyParallel: true,

  // Use a single worker in CI to avoid interference; otherwise use default
  workers: process.env.CI ? 1 : undefined,

  // Reporter settings (list in terminal and create HTML report)
  reporter: [['list'], ['html']],

  // Shared settings for all tests
  use: {
    // Default base URL for the site (so tests don't repeat it)
    baseURL: 'https://mohhsen.com',

    // Collect trace only on the first retry
    trace: 'on-first-retry',
    
    // Capture screenshots only on failure
    screenshot: 'only-on-failure',
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to run tests in Firefox as well
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
});