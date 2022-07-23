const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');

test.describe('Search Results', () => {
    test('First result should contain devbridge.com', async ({page}) => {
       await page.goto('https://duckduckgo.com/');
       await page.locator ('input[name=q]').fill('devbridge');
       await page.locator('input[name=q]').press('Enter');

       let index=0;
       let hrefAttribute = await page.locator(`#r1-${index} h2 a`).getAttribute('href');

        expect(hrefAttribute).toContain('devbridge.com');

       await page.pause();
    });

    test('Third result should contain linkedin.com', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        let searchResultsPage = new SearchResultsPage(page);
        expect(await searchResultsPage.getResultHeadingHrefAttribute(2)).toContain('linkedin.com');
    });
});



    test('Search query should get populated in Search Results page', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        let searchResultsPage = new SearchResultsPage(page);
        expect(await searchResultsPage.getQueryInputText()).toEqual('devbridge');
    });
