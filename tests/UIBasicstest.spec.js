const {test,expect} = require('@playwright/test');
//const {expect} = require('../playwright.config')

test.only('First Playwright test',async ({browser}) =>
{
   const context= await browser.newContext();
   const page= await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   //css  type,fill
  await page.locator("#username").fill("learning");
 await page.locator("[type='password']").fill("learning");
 await page.locator("[id='signInBtn']").click();
 //webdriverwait--selenium
 console.log(await page.locator("[style*='block']").textContent());
 await expect(page.locator("[style*='block']")).toContainText('Incorrect');


}
)

test('second Playwright test',async ({page}) =>
{

   await page.goto("https://www.google.com/");
   console.log(await page.title());
 await  expect(page).toHaveTitle("Google");
}


)

