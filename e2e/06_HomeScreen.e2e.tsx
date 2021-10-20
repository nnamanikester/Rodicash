/* global it, beforeAll, describe */
import {by, device, expect, element, waitFor} from 'detox';

describe('Home Screen', () => {
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

  it('Clicking action sheet header handle should close it.', async (): Promise<void> => {
    await element(by.id('header_handle')).tap();
    await expect(element(by.text('Yesterday, 24th May'))).not.toBeVisible();
  });

  it('Clicking add money button should navigate to add money screen.', async (): Promise<void> => {
    await element(by.id('add_money_button')).tap();
    await expect(element(by.text('Add Money'))).toBeVisible();
    await element(by.id('back_button')).tap();
  });

  it('Clicking notifications icon should navigate to notification screen.', async (): Promise<void> => {
    await element(by.id('nootifications_icon')).tap();
    await expect(element(by.text('Notifications'))).toBeVisible();
    await element(by.id('back_button')).tap();
  });
});
