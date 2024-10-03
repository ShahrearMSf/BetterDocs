import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/popular-docs/');
  await page.getByRole('heading', { name: 'Popular Docs_Related' }).click();
  await page.getByText('Updated on June 30,').click();
  await page.getByText('Updated on June 30,').click();
  await page.getByRole('heading', { name: 'Popular Docs', exact: true }).click();
  await page.locator('li').filter({ hasText: 'Mercedes GLS450: Here’s why' }).getByRole('img').click();
});