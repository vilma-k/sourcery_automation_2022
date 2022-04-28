const { ResultsPage } = require('./ResultsPage');

const { test, expect } = require('@playwright/test');

exports.SearchPage = class SearchPage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo() {
        await this.page.goto('https://duckduckgo.com/');
        return this;
    }

    async search(query) {
        await this.page.locator('input[id=search_form_input_homepage]').type(query);
        await this.page.keyboard.press('Enter');
        return new ResultsPage(this.page);
    }
}