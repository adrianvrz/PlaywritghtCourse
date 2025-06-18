import { test, expect, Browser, Page } from '@playwright/test';

test.describe('Check and Radio Buttons in the Automation Sandbox', () => {

    test('Check and Radio Buttons', async ({ page }) => {
        await test.step('Open the Automation Sandbox page', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        });

        // Check a checkbox
        await test.step('Check a checkbox', async () => {
            const checkbox = page.getByRole('checkbox', { name: 'Pizza 🍕' });
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        });

        // Uncheck a checkbox
        await test.step('Uncheck a checkbox', async () => {
            const checkbox = page.getByRole('checkbox', { name: 'Pizza 🍕' });
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        });

        // Select a radio button
        await test.step('Select a radio button', async () => {
            const radioButton = page.getByRole('radio', { name: 'Si' });
            await radioButton.check();
            await expect(radioButton).toBeChecked();
        });
    });
});