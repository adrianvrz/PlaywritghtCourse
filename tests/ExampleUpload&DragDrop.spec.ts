import { test, expect, Browser, Page } from '@playwright/test';

test.describe('Tests Uploads and Drag and Drops in Automation Sandbox', () => {

    test('Puedo subir archivos a Automation Sandbox - NO IMPLEMENTADO EN PROD', async ({ page }) => {
        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
            await page.goto('');
        })
        await test.step('Agrego archivos para ser subidos', async () => {
            await page.getByLabel('Upload file').setInputFiles(['pathAlArchivo.pdf', 'Invoice1.pdf', 'Invoice2.pdf']);
                await page.getByLabel('Upload file').setInputFiles([]);

            })

        })

        test('Puedo hacer un Drag and Drop de elementos en Automation Sandbox - NO IMPLEMENTADO EN PROD', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })
            await test.step('Selecciono un día de la semana del dropdown', async () => {
                await page.getByTestId('DragFrom').dragTo(page.getByTestId('DragTo'));

            })

        })
    });      