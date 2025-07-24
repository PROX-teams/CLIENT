import { test, expect } from '@playwright/test';

test('메인 페이지가 제대로 열리는지 확인', async ({ page }) => {
  await page.goto('https://example.com'); // 또는 로컬 서버 주소
  await expect(page).toHaveTitle(/Example/);
  await expect(page.locator('h1')).toHaveText(/Example Domain/);
});