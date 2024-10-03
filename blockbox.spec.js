import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/');
  await page.locator('#menu-item-174').getByRole('link', { name: 'Category Box Menu Toggle' }).click();
  await page.getByRole('heading', { name: 'Category Box' }).click();
  await page.locator('#betterdocs-breadcrumb').click();
  await page.getByText('Updated on June 11,').click();
  await page.locator('.betterdocs-print-btn').click();
  await page.locator('path:nth-child(6)').click();
  await page.getByRole('link', { name: 'All In All MSF 1 Doc' }).click();
  await page.locator('form').click();
  await page.getByText('Home Docs All In All MSF All').click();
  await page.getByText('Popular Search howmercedeshow').click();
  await page.getByText('All In All MSF 1').click();
  await page.getByText('1', { exact: true }).nth(1).click();
  await page.getByText('All In All MSF 1').click();
  await page.getByText('All In All MSF 1').click();
  await page.locator('#betterdocs-sidebar').getByRole('link', { name: 'Mercedes GLS450: Here’s why' }).click();
});