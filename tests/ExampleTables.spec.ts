import { test, expect, Browser, Page } from '@playwright/test';

// Test suite for static tables in the Automation Sandbox
test.describe('Example Tables in the Automation Sandbox', () => {

    test('Validate the names in the second column of the static table', async ({ page }) => {
        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

        // Selects the table that follows the h2 with text "Tabla estática"
        // Extracts the text content of the second column (index 1) from each row
        const nombres = await page.$$eval('h2:has-text("Tabla estática") + table tbody tr', rows => rows.map(row => {
            const cells = row.querySelectorAll('td');
            return cells[1]?.textContent?.trim();
        }));

        // Expected names in the second column
        const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe'];
        expect(nombres).toEqual(nombresEsperados);
    });

});

// Test suite for dynamic tables in the Automation Sandbox
test.describe('Example Dinamic Tables in the Automation Sandbox', () => {

    test('Validating the dynamic table values after reloading the page', async ({ page }) => {
        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

        // Extracts all values from the dynamic table before reload
        const ValuesBeforeReload = await page.$$eval(
            'h2:has-text("Tabla dinámica") + table tbody tr',
            filas => filas.map(fila => {
                const celdas = fila.querySelectorAll('td');
                return Array.from(celdas).map(celda => celda.textContent?.trim());
            })
        );

        // Reloads the page
        await page.reload();

        // Extracts all values from the dynamic table after reload
        const ValuesAfterReload = await page.$$eval(
            'h2:has-text("Tabla dinámica") + table tbody tr',
            filas => filas.map(fila => {
                const celdas = fila.querySelectorAll('td');
                return Array.from(celdas).map(celda => celda.textContent?.trim());
            })
        );

        // Compares the values before and after reload to ensure they are different
        expect(ValuesBeforeReload).not.toEqual(ValuesAfterReload);
    });

});