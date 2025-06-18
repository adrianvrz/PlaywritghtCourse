import { test, Browser, expect, Page } from '@playwright/test';

test.describe('Actions in the Automation Sandbox', () => {

    let RellenoDeCampoTexto = 'Este es un texto de prueba para llenar el campo de texto.';
    

    test('lleno el campo de texto y hago click en el boton', async ({ page }) => {
        await test.step('Abrir la pagina de Automation Sandbox', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        });

        await test.step('Llenar el campo de texto', async () => {
            await page.getByRole('textbox', { name: 'Un aburrido texto' }).fill(RellenoDeCampoTexto);
        });

    });
});