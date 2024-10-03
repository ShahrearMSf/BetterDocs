import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/multiple-kb/');
  await page.getByRole('heading', { name: 'Multiple KB' }).click();
  await page.getByRole('link', { name: 'BCB 7 Docs' }).click();
  await page.getByRole('link', { name: 'API & Development 1 doc Last' }).click();
  await page.getByText('Home Docs BCB API &').click();
  await page.locator('h2').click();
  await page.locator('#main').getByRole('link', { name: 'Does your solution provide an' }).click();
});