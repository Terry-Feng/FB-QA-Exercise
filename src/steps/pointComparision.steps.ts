import {CustomWorld} from "../support/custom-world";
import {Given, Then, When} from "@cucumber/cucumber";
import {expect, Page} from "@playwright/test";
import {calculateDistance} from "../utils/util";

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

When('the user inputs {string} and click analyze button' , async function (this: CustomWorld, points: string) {
    const page = this.page!;
    await page.locator('[name="input"]').fill(points);
    await page.getByRole('button').click();
});

Then('the tool should display message {string}', async function (this: CustomWorld, msg: string) {
    const page = this.page!;
    await expect(page.locator('//div[contains(@class, "feedback")]')).toHaveText(msg)
});

Then('the closest points are {string} and {string} with distance {string}', async function (this: CustomWorld, pointA: string, pointB: string, distance: string) {
    const page = this.page!;
    await checkPointsAndDistanceFormat(page, 'Closest', pointA, pointB, distance);
});

Then('the furthest points are {string} and {string} with distance {string}', async function (this: CustomWorld, pointA: string, pointB: string, distance: string) {
    const page = this.page!;
    await checkPointsAndDistanceFormat(page, 'Furthest', pointA, pointB, distance);
});

Then('the average distance between all points is {string}', async function (this: CustomWorld, distance: string) {
    const page = this.page!;
    await expect(page.locator(`//td[contains(text(),"Average distance")]/following-sibling::td[3]`)).toHaveText(distance);
});

Then('the expected closest distance is {string}', async function (this: CustomWorld, distance: string) {
    const page = this.page!;
    const pointA = await page.locator('//td[text()="Closest"]/following-sibling::td[1]').innerText();
    const pointB = await page.locator('//td[text()="Closest"]/following-sibling::td[2]').innerText();

    expect(calculateDistance(pointA, pointB)).toEqual(distance);
});

Then('the expected furthest distance is {string}', async function (this: CustomWorld, distance: string) {
    const page = this.page!;
    const pointA = await page.locator('//td[text()="Furthest"]/following-sibling::td[1]').innerText();
    const pointB = await page.locator('//td[text()="Furthest"]/following-sibling::td[2]').innerText();

    expect(calculateDistance(pointA, pointB)).toEqual(distance);
});

async function checkPointsAndDistanceFormat(page: Page, characteristics: string, pointA: string, pointB: string, distance: string) {
    await expect(page.locator(`//td[text()="${characteristics}"]/following-sibling::td[1]`)).toHaveText(pointA);
    await expect(page.locator(`//td[text()="${characteristics}"]/following-sibling::td[2]`)).toHaveText(pointB);
    await expect(page.locator(`//td[text()="${characteristics}"]/following-sibling::td[3]`)).toHaveText(distance);
}

