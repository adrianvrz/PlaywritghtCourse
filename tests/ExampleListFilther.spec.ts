import { test, Browser, Page, expect } from '@playwright/test';

test.describe('Navegación en www.freerangetesters.com', () => {
    //crear un lista de secciones con nombre, url y titulo esperado para los casos en que son mas de uno
    const secciones = [
        { nombre: 'Academia', url: '/academia', tituloEsperado: 'Academia' },
        { nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos' },
        { nombre: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos' },
        { nombre: 'Blog', url: '/blog', tituloEsperado: 'Free Range Testers' }
        // Agrega más secciones si es necesario
    ];
    for (const seccion of secciones) {
        test(`Validar redirección a la sección "${seccion.nombre}"`, async ({ page }) => {
            await test.step(`Estando yo en la web principal www.freerangetesters.com`, async () => {
                await page.goto('https://www.freerangetesters.com');
                await expect(page).toHaveTitle('Free Range Testers');
            });

            await test.step(`Cuando hago click en "${seccion.nombre}"`, async () => {
                await page.locator('#page_header').getByRole('link', { name: seccion.nombre, exact: true }).click();
                await page.waitForURL(`**${seccion.url}`);
            });

            await test.step(`Soy redirigido a la sección de título "${seccion.tituloEsperado}"`, async () => {
                await expect(page).toHaveTitle(seccion.tituloEsperado);

                // Como Filtrar por texto cuando tienes mas de un elemento con el mismo nombre 
                await test.step(`Soy redirigido a la sección de título "${seccion.tituloEsperado}"`, async () => {
                    await expect(page).toHaveTitle(seccion.tituloEsperado);
                    const listItemByText = page.getByRole('listitem')
                        .filter({ hasText: 'Playstation 5' })
                        .getByRole('button', { name: 'Add to cart' });
                    await listItemByText.click();
                    await expect(listItemByText).toBeVisible();

                    // Como Filtrar por locator cuando tienes mas de un elemento con el mismo nombre (Recomendado)
                    const listItemByLocator = page.getByRole('listitem')
                        .filter({ has: page.getByRole('heading', { name: 'Playstation 5' }) })
                        .getByRole('button', { name: 'Add to cart' });
                    await listItemByLocator.click();
                    await expect(listItemByLocator).toBeVisible();
                });
            });

            // Verifica que el título de la página sea el esperado después de cada test
            await expect(page).toHaveTitle(seccion.tituloEsperado);
        });
    }
});