const { test, expect } = require('@playwright/test');

exports.ResultsPage = class ResultsPage {
    constructor(page) {
        this.page = page;
    }

    async getResults() {
        return await this.page.locator('div[data-testid=result]');
    }

    async assertNthResultFirstLinkContains(index, text) {
        let results = await this.getResults();
        let href = await results.nth(index).locator('a').first().getAttribute('href');
        expect(href).toContain(text);
    }
}