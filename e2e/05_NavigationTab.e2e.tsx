/* global it, beforeAll, describe */
import {by, device, expect, element, waitFor} from 'detox';

describe('Navigation Tab', () => {
  beforeAll(async (): Promise<void> => {
    await device.launchApp();

    try {
      await waitFor(element(by.text('The easiest way to withdraw cash')))
        .toExist()
        .withTimeout(5000);
      await element(by.id('login_button')).tap();
      await element(by.id('email_field')).typeText('nnamanikester@gmail.com');
      await element(by.id('password_field')).typeText('123456');
      await element(by.text('Login.')).tap();
      await element(by.id('login_button')).tap();
    } catch (e: any) {
      const field = element(by.id('password_field'));
      await field.typeText('123456');
      await field.tapReturnKey();
    }

    await waitFor(element(by.id('home_tab_navigation')))
      .toExist()
      .withTimeout(5000);
  });

  it('Clicking on Transactions tab should navigate to transactions screen.', async (): Promise<void> => {
    await element(by.id('transactions_tab_navigation')).tap();
    await expect(element(by.text('Transfer'))).toBeVisible();
  });

  it('Clicking on Cashout tab should navigate to transactions screen.', async (): Promise<void> => {
    await element(by.id('cashout_tab_navigation')).tap();
    await expect(element(by.text('Cash out'))).toBeVisible();
  });

  it('Clicking on Map tab should navigate to transactions screen.', async (): Promise<void> => {
    await element(by.id('map_tab_navigation')).tap();
    await expect(element(by.text('Map'))).toBeVisible();
  });

  it('Clicking on More tab should navigate to transactions screen.', async (): Promise<void> => {
    await element(by.id('more_tab_navigation')).tap();
    await expect(element(by.text('More'))).toBeVisible();
  });

  it('Clicking on Home tab should navigate to transactions screen.', async (): Promise<void> => {
    await element(by.id('home_tab_navigation')).tap();
    await expect(element(by.text('Home'))).toBeVisible();
  });
});
