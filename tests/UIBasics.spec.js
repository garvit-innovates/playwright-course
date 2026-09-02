allcontent

// test('Browser Context Playwright test', async ({browser})=>
// {
// 	const context = await browser.newContext();
// 	const page = await context.newPage();
// 	await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
// 	const title = await page.title();
// 	console.log("Page title: " + title);
// 	await context.close();
// });

// test('Page Playwright test', async ({page})=>
// {
// 	await page.goto("https://google.com");
// 	const pageTitle = await page.title();
// 	console.log("Google title: " + pageTitle);
// 	await expect(page).toHaveTitle(/Google/);
// 


test('Browser Context Playwright test', async ({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
//css
await page. locator( '#username') . type("rahulshetty") ;
await page. locator("[type='password']").type("learning");
await page. locator("#signInBtn").click();
console. log(await page. locator("[style *= 'block' ]") .textContent() ) ;
await expect(page. locator("[style *= 'block' ]") ) .toContainText( 'Incorrect');
});