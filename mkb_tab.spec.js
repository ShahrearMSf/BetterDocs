import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/multiple-kb-tab/');
  await page.getByText('Multiple KB Tab ABBCBDabangHolidayJune 11Loyalty ManagementSAS C Banana Explore').click();
  await page.getByRole('heading', { name: 'Multiple KB Tab' }).click();
  await page.getByRole('link', { name: 'A', exact: true }).click();
  await page.getByRole('link', { name: 'B', exact: true }).click();
  await page.getByRole('link', { name: 'BCB' }).click();
  await page.getByRole('link', { name: 'Dabang' }).click();
  await page.getByRole('link', { name: 'Holiday' }).click();
  await page.getByRole('link', { name: 'June' }).click();
  await page.getByRole('link', { name: 'Loyalty Management', exact: true }).click();
  await page.getByRole('link', { name: 'SAS' }).click();
  await page.getByRole('heading', { name: 'Getting Started' }).click();
  await page.locator('#post-151').getByRole('article').locator('img').first().click();
  await page.locator('#post-151').getByRole('article').locator('div').filter({ hasText: 'Getting Started' }).nth(1).click();
  await page.getByRole('link', { name: 'Explore Button' }).click();
});