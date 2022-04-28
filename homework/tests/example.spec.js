// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Concatenate', () => {
  test('Concatenating 2 and 3 results in 23', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: 'Prototype'});
    await page.locator('#number1Field').type('2');
    await page.locator('#number2Field').type('3');
    await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
    await page.locator('#calculateButton').click();

    await expect(page.locator('#numberAnswerField')).toHaveValue('24');
  });
});