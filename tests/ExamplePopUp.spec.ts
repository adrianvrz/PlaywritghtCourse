import { test, expect, Browser, Page } from '@playwright/test';

// Group related tests for checkboxes and radio buttons
test.describe('Validando elementos en el popup', () => {
    // Test case for validating elements within a popup when does not have a popup handler
    test('Validando dentro de un popup', async ({ page }) => {
        await test.step('Dado que navego al sandbox', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Cuando hago click en el botón popup', async () => {
            await page.getByRole('button', { name: 'Mostrar popup' }).click();
        })

        await test.step('Puedo validar un elemento dentro del popup', async () => {
            await expect(page.getByText('¿Viste? ¡Apareció un Pop-up!')).toHaveText('¿Viste? ¡Apareció un Pop-up!');
            await page.getByRole('button', { name: 'Cerrar' }).click();

        })


    })
    // Test case for validating elements within a popup alert that has a popup handler

    test('Validar mensaje del popup de alerta', async ({ page }) => {
        await page.goto('https://demoqa.com/alerts');

        // Escucha el evento de alerta y valida el mensaje
        page.once('dialog', async (dialog) => {
            expect(dialog.message()).toBe('You clicked a button');
            await dialog.accept();
        });

        // Haz click en el botón que dispara la alerta
        await page.click('#alertButton');
    });
});