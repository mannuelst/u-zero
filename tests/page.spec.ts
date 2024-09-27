import { expect, test, } from '@playwright/test';

test.describe('User Management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000')
  });

  test('should display title', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('U-zero')
    await expect(page.locator('table')).toBeVisible()
  })


  test('should display the user list', async ({ page }) => {
    await expect(page.locator('table')).toBeVisible();
    await expect(page.locator('th', { hasText: 'Nome' })).toBeVisible()
    await expect(page.locator('th', { hasText: 'Email' })).toBeVisible()
    await expect(page.locator('th', { hasText: 'Role' })).toBeVisible()
    await expect(page.locator('th', { hasText: 'Action' })).toBeVisible()
  });

  test('should search for a user', async ({ page }) => {
    await page.fill('input[placeholder="Search users..."]', 'Jane')
    await expect(page.locator('td', { hasText: 'Jane Smith' })).toBeVisible();
    await expect(page.locator('td', { hasText: 'Pedro Almeida' })).not.toBeVisible();
  })

  test('should open the Add User modal', async ({ page }) => {
    await page.click('button:has-text("Add User")');
    await expect(page.locator('form', { hasText: 'Add User' })).toBeVisible();
  })
})
