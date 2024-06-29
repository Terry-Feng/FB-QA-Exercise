import {CustomWorld} from "../support/custom-world";
import {Given, Then, When} from "@cucumber/cucumber";
import {expect} from "@playwright/test";

Given('the {string} home page is ready', async function (this: CustomWorld, country: string) {
    const page = this.page!;
    if (country !== 'NZ')
        process.env.country = country;
    await page.locator('h1').isVisible();
});

When('the user inputs {string}', async function (this: CustomWorld, points: string) {
    const page = this.page!;
    await page.locator('[name="input"]').fill(points);
});

Then('the tool should display {string}', async function (this: CustomWorld, msg: string) {
    const page = this.page!;
    await expect(page.locator('//div[contains(@class, "feedback")]')).toHaveText(msg)
});