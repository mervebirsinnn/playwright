// @ts-check
import { defineConfig, expect } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
   timeout:30*1000 ,
  expect :{
    timeout:5000,
    reporter: [
    ['list'],                                     // Terminal çıktısı için
    ['html', { open: 'never' }],                  // HTML raporu (Jenkins için 'never' şart)
    ['allure-playwright', { outputFolder: 'allure-results' }] // package.json'daki allure için
  ],
  },
    reporter: 'html',

    use:{
      browserName:'chromium',
      headless:true,
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    }
      
  
  
});


module.exports = config;


