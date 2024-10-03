import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/category-handbook/');
  await page.getByRole('heading', { name: 'Category Handbook' }).click();
  await page.getByRole('heading', { name: 'All In All MSF' }).click();
  await page.getByText('Here you will find the docs').click();
  await page.locator('#post-144 article').filter({ hasText: 'All In All MSF 1 Here you' }).locator('img').click();
  await page.locator('#post-144 article').filter({ hasText: 'All In All MSF 1 Here you' }).getByRole('link').nth(1).click();
});