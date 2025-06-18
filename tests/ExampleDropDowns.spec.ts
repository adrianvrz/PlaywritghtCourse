import { test, expect, Browser, Page } from '@playwright/test';

test.describe('Select Dropdowns in the Automation Sandbox', () => {

    test('Select an option from a dropdown', async ({ page }) => {
        await test.step('Open the Automation Sandbox page', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        });

        await test.step('Select an option from the dropdown', async () => {
            const dropdown = page.getByLabel('Dropdown');
            await dropdown.selectOption('Tennis');
        });

    });

    test('Select a day from a dropdown days of week', async ({ page }) => {
        await test.step('Open the Automation Sandbox page', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        });

        await test.step('Select a day from the dropdown', async () => {
            const dropdownDays = page.getByRole('button', { name: 'Día de la semana' });
            await dropdownDays.click();
            await page.getByRole('link', { name: 'Martes' }).click();
        });
    });

});