import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/popular-docs/');
  await page.getByRole('heading', { name: 'Related Categories', exact: true }).click();
  await page.locator('.betterdocs-category-thumb-image').first().click();
  await page.getByText('1', { exact: true }).click();
  await page.locator('.betterdocs-category-items-counts').first().click();
  await page.getByRole('button', { name: 'Load More' }).click();
  await page.locator('#post-152 div').filter({ hasText: 'All In All MSF 1 Here you' }).nth(2).click();
});