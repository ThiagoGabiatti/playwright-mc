import { test, expect } from '@playwright/test';

test('teste de login @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@thiagoqa.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('teste de login 2 @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@thiagoqa.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('teste de login 3 @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@thiagoqa.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});