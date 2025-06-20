import { test, expect, Browser, Page } from '@playwright/test';

test.describe('Select Dropdowns in the Automation Sandbox', () => {

    // Test to validate the options of the sports dropdown
    test('Validar opciones del dropdown de deportes', async ({ page }) => {
        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

        // Select all options from the select element by its id
        const options = await page.$$eval('#formBasicSelect option', opts =>
            opts.map(option => option.textContent?.trim())
        );

        // Validate that the list has at least one value
        expect(options.length, 'La lista de opciones está vacía').toBeGreaterThan(0);

        // Expected options
        const opcionesEsperadas = [
            'Seleccioná un deporte',
            'Fútbol',
            'Tennis',
            'Basketball'
        ];

        // Validate that the options match the expected ones
        expect(options,'La lista de opciones no coincide con las esperadas').toEqual(opcionesEsperadas);
    });

    // Test to select an option from a dropdown
    test('Select an option from a dropdown', async ({ page }) => {
        await test.step('Open the Automation Sandbox page', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        });

        await test.step('Select an option from the dropdown', async () => {
            // Get the dropdown by its label and select the 'Tennis' option
            const dropdown = page.getByLabel('Dropdown');
            await dropdown.selectOption('Tennis');
            // Assert that the dropdown value is 'Tennis'
            await expect(dropdown).toHaveValue('Tennis');
        });

    });

    // Test to select a day from the days of week dropdown
    test('Select a day from a dropdown days of week', async ({ page }) => {
        await test.step('Open the Automation Sandbox page', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        });

        await test.step('Select a day from the dropdown', async () => {
            // Open the days of the week dropdown
            const dropdownDays = page.getByRole('button', { name: 'Día de la semana' });
            await dropdownDays.click();
            await expect(dropdownDays).toBeVisible();
            // Select 'Martes' (Tuesday) from the dropdown
            await page.getByRole('link', { name: 'Martes' }).click();
            // Validate that the text "Martes" is no longer visible (dropdown closed)
            await expect(page.getByRole('link', { name: 'Martes' })).not.toBeVisible();
        });
    });

});