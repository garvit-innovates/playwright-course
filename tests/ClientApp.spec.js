const {test,expect} =require('@playwright/test')

test('form-fill' , async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("garvitchugh66@gmail.com");
    await page.locator("#userPassword").fill("Test@1234");
    await page.locator("[value='Login']").click();

    // await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);



})