import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/sidebar/');
  await page.getByRole('heading', { name: 'Sidebar' }).click();
  await page.locator('.betterdocs-category-header').first().click();
  await page.locator('#betterdocs-sidebar article').filter({ hasText: 'API & Development 4 Can scale' }).locator('span').first().click();
  await page.locator('.betterdocs-category-items-counts').first().click();
  await page.locator('.betterdocs-category-header').first().click();
  await page.locator('#post-141 div').filter({ hasText: 'What are your feelings' }).nth(1).click();
  await page.locator('#post-141').getByRole('link').nth(1).click();
});