const { test, expect } = require('@playwright/test');

const data = [
    'Prototype',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ]

  data.forEach(version => {
    test.describe(version + ': Add', () => {
      test('Adding 2 and 3 results in 5', async ({ page }) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
        await page.selectOption('#selectBuild', { label: version});
        await page.locator('#number1Field').type('2');
        await page.locator('#number2Field').type('3');
        await page.selectOption('#selectOperationDropdown', {label: 'Add'});
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#numberAnswerField')).toHaveValue('5');
      });
    });

    test.describe(version + ': Subtract', () => {
        test('Subtracting 2 from 3 results in 1', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('3');
          await page.locator('#number2Field').type('2');
          await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('1');
        });
      });

      test.describe(version + ': Subtract result negative value', () => {
        test('Subtracting 3 from 2 results in -1', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('2');
          await page.locator('#number2Field').type('3');
          await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
        });
      });

      test.describe(version + ': Multiply', () => {
        test('Multiplying 3 and 2 results in 6', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('3');
          await page.locator('#number2Field').type('2');
          await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('6');
        });
      });

      test.describe(version + ': Divide', () => {
        test('Dividing 6 by 2 results in 3', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('6');
          await page.locator('#number2Field').type('2');
          await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('3');
        });
      });

      test.describe(version + ': Concatenate', () => {
        test('Concatenating 6 and 2 results in 62', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('6');
          await page.locator('#number2Field').type('2');
          await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('62');
        });
      });

      test.describe(version + ':  Add integers only', () => {
        test('Adding 2 and 3.5 results in 5 integers only', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('2');
          await page.locator('#number2Field').type('3.5');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('input[id=integerSelect]').check();
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('5');
        });
      });

      test.describe(version + ': Add negative values', () => {
        test('Adding -2 and -3 results in -5', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('-2');
          await page.locator('#number2Field').type('-3');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('-5');
        });
      });
      test.describe(version + ': Subtract negative values with positive value result', () => {
        test('Subtracting -3 from -2 results in 1', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('-2');
          await page.locator('#number2Field').type('-3');
          await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('1');
        });
      });

      test.describe(version + ': Subtract negative values with negative value result', () => {
        test('Subtracting -3 from -5 results in 1', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('-5');
          await page.locator('#number2Field').type('-3');
          await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('-2');
        });
      });

      test.describe(version + ': Subtract integers only', () => {
        test('Subtracting 5.5 from 10 results in 4', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('10');
          await page.locator('#number2Field').type('5.5');
          await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
          await page.locator('input[id=integerSelect]').check();
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('4');
        });
      });

      
  });

