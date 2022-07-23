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

      test.describe(version + ': Subtract with empty 1st value', () => {
        test('Subtracting 5 from 0 results in -5', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('');
          await page.locator('#number2Field').type('5');
          await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('-5');
        });
      });

      test.describe(version + ': Subtract integers only', () => {
        test('Subtracting 5.5 from 10 results in 4 integers only', async ({ page }) => {
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

      test.describe(version + ': Multiply negative values', () => {
        test('Multiplying -3 and -2 results in 6', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('-3');
          await page.locator('#number2Field').type('-2');
          await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('6');
        });
      });

      test.describe(version + ': Multiply to get negative result', () => {
        test('Multiplying -3 and 2 results in -6', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('-3');
          await page.locator('#number2Field').type('2');
          await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('-6');
        });
      });   

      test.describe(version + ': Multiply integers only', () => {
        test('Multiplying 5.5 and 2.5 results in 13 integers only', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('5.5');
          await page.locator('#number2Field').type('2.5');
          await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
          await page.locator('input[id=integerSelect]').check();
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('13');
        });
      });    

      test.describe(version + ': Divide', () => {
        test('Dividing 5 by 3 results in 1.6666666666666667', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('5');
          await page.locator('#number2Field').type('3');
          await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('1.6666666666666667');
        });
      });

      test.describe(version + ': Divide integers only', () => {
        test('Dividing 5 by 3 results in 1 integers only', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('5');
          await page.locator('#number2Field').type('3');
          await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
          await page.locator('input[id=integerSelect]').check();
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('1');
        });
      });

      test.describe(version + ': Divide by 0', () => {
        test('Dividing 5 by 0 results in error message', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('5');
          await page.locator('#number2Field').type('0');
          await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
          await page.locator('#calculateButton').click();

          await expect(page.locator('#errorMsgField')).toHaveText('Divide by zero error!');
        });
      });

      test.describe(version + ': Concatenate words', () => {
        test('Concatenating "first " and "second" results in first second', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('first ');
          await page.locator('#number2Field').type('second');
          await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#numberAnswerField')).toHaveValue('first second');
        });
      });

      test.describe(version + ': Add letter as 1st number', () => {
        test('Adding a and 3 results in error message', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('a');
          await page.locator('#number2Field').type('3');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
      });

      test.describe(version + ': Add letter as 2nd number', () => {
        test('Adding 3 and a results in error message', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('3');
          await page.locator('#number2Field').type('a');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });
      });

      test.describe(version + ': Subtract letter as 2nd number', () => {
        test('Subtracting a from 3 results in error message', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('3');
          await page.locator('#number2Field').type('a');
          await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });
      });

      test.describe(version + ': Subtract letter as 1st number', () => {
        test('Subtracting 3 from a results in error message', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('a');
          await page.locator('#number2Field').type('3');
          await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
      });

      test.describe(version + ': Multiply letter as 1st number', () => {
        test('Multiplying a and 3 results in error message', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('a');
          await page.locator('#number2Field').type('3');
          await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
      });

      test.describe(version + ': Multiply letter as 2nd number', () => {
        test('Multiplying 3 and a results in error message', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('3');
          await page.locator('#number2Field').type('a');
          await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });
      });

      test.describe(version + ': Divide letter as 1st number', () => {
        test('Dividing a by 3 results in error message', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('a');
          await page.locator('#number2Field').type('3');
          await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
      });

      test.describe(version + ': Divide letter as 2nd number', () => {
        test('Dividing 3 by a results in error message', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('3');
          await page.locator('#number2Field').type('a');
          await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
          await page.locator('#calculateButton').click();
      
          await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });
      });

      test.describe(version + ':  Integers only checkbox is active', () => {
        test('Integers only checkbox is active', async ({ page }) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          const checkboxState = await page.evaluate(() => {
            const checkbox = document.querySelector('input[id=integerSelect]');
            return checkbox.checked;
        });
          await page.locator('input[id=integerSelect]').check();
          const newCheckboxState = await page.evaluate(() => {
            const checkbox = document.querySelector('input[id=integerSelect]');
            return checkbox.checked;
        });

          await expect(checkboxState != newCheckboxState).toBeTruthy();
        });
      });

  });

