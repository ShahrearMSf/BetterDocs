import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/faq/');
  await page.getByRole('heading', { name: 'Frequently Asked Questions' }).click();
  await page.getByRole('heading', { name: 'Shipping & Delivery' }).click();
  await page.locator('.betterdocs-faq-post').first().click();
  await page.getByText('We usually take 3-5 business').first().click();
  await page.locator('.betterdocs-faq-iconminus').first().click();
  await page.locator('li:nth-child(2) > .betterdocs-faq-group > .betterdocs-faq-post > .betterdocs-faq-iconplus').first().click();
  await page.locator('li:nth-child(2) > .betterdocs-faq-group > .betterdocs-faq-post').first().click();
  await page.getByRole('heading', { name: 'XYZ' }).click();
  await page.getByText('Where are you?').first().click();
  await page.locator('ul').filter({ hasText: 'Where are you? At WPDev Where' }).getByRole('img').first().click();
  await page.getByRole('heading', { name: 'Orders' }).click();
  await page.locator('ul:nth-child(8) > li > .betterdocs-faq-group > .betterdocs-faq-post').first().click();
  await page.getByText('FAQ Frequently Asked').click();
});