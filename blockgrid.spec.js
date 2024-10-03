import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/category-grid/');
  await page.getByRole('heading', { name: 'Category Grid' }).click();
  await page.getByText('Updated on September 11,').click();
  await page.locator('.betterdocs-category-header').first().click();
  await page.getByText('API & Development 4').click();
  await page.getByText('4', { exact: true }).first().click();
  await page.getByText('4', { exact: true }).first().click();
  await page.locator('.betterdocs-category-icon').first().click();
});