import { test, Browser, expect, Page } from '@playwright/test';

test.describe('Actions in the Automation Sandbox', () => {
    
    test('Click en el Boton ID dinamico', async ({ page }) => {    
        await test.step('Abrir la pagina de Automation Sandbox', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        });

        //Usando el metodo click para hacer click en el boton con id dinamico
        await test.step('Puedo hacer click en el boton con id dinamico', async () => {
            await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();
        });
        //Usando el metodo getByRole dentro de una constante para hacer click en el boton con id dinamico
        await test.step('Puedo hacer click en el boton con id dinamico', async () => {
            const dynamicButton = page.getByRole('button', { name: 'Hacé click para generar un ID'});
            //force: true permite hacer click en el boton aunque este deshabilitado
            await dynamicButton.click({ force: true });
            await expect(page.getByText('OMG, aparezco después de 3'), 'No contiene el texto indicado').toBeVisible();
        });
            //dblclick: hace doble click en el boton
            //await dynamicButton.dblclick();
            //click con el boton derecho del mouse
            //await dynamicButton.click({button: 'right'});
            //click con la tecla Shift presionada
            //await dynamicButton.click({ modifiers: [ 'Shift'] });
            //hover: mueve el mouse sobre el boton
            //await dynamicButton.hover();

    });
});