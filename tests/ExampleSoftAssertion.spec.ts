import { test, expect, Browser, Page } from '@playwright/test';

// Group related tests for checkboxes and radio buttons
test.describe('Check and Radio Buttons in the Automation Sandbox with soft Assertions∫', () => {

    // Test case for interacting with checkboxes and radio buttons
    test('Check visibility of Radio Buttons are correct', async ({ page }) => {
        // Step: Open the target web page
        await test.step('Open the Automation Sandbox page', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        });

        // Step: Validate that all expected checkbox elements are present and visible
        await test.step('Valido que todos los elementos de los checkboxes son los correctos', async () => {
            // Soft assertion: Check if "Pizza 🍕" checkbox is visible
            await expect.soft(page.getByText('Pia 🍕'), 'No se encontró el elemento Pizza 🍕').toBeVisible();
            // Soft assertion: Check if "Hamburguesa 🍔" checkbox is visible
            await expect.soft(page.getByText('Hamburguesa 🍔'), 'No se encontró el elemento Hamburguesa 🍔').toBeVisible();
            // Soft assertion: Check if "Pasta 🍝" checkbox is visible
            await expect.soft(page.getByText('Pasta 🍝'), 'No se encontró el elemento Pasta 🍝').toBeVisible();
            // Soft assertion: Check if "Helado 🍧" checkbox is visible
            await expect.soft(page.getByText('Helado 🍧'), 'No se encontró el elemento Helado 🍧').toBeVisible();
            // Soft assertion: Check if "Torta 🍰" checkbox is visible
            await expect.soft(page.getByText('Torta 🍰'), 'No se encontró el elemento Torta 🍰').toBeVisible();
        })

    })

});