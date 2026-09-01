// https://github.com/garvit-innovates/playwright-course/compare/main...feat/garvit.chugh/day1
### Test Timeout in Playwright

**Definition:**
**Test timeout** is the maximum amount of time Playwright allows a test case to complete before it **fails automatically**.

**Example:**

```js
test('Login test', async ({ page }) => {
  // test steps
}, { timeout: 30000 });
```

👉 `30000` = **30 seconds**.
If the test doesn't finish within 30 seconds, Playwright marks it as **failed**.
