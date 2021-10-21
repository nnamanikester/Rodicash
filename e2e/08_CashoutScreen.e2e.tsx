/* global it, beforeAll, describe */
import {by, device, expect, element, waitFor} from 'detox';

describe('Cashout Screen', () => {
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
    await element(by.id('cashout_tab_navigation')).tap();
  });

  it('Should show cashout title.', async (): Promise<void> => {
    await expect(element(by.text('Cash out'))).toBeVisible();
  });

  it('Clicking on withdraw button should navigate to scan screen.', async (): Promise<void> => {
    await element(by.id('three')).tap();
    await element(by.id('zero')).multiTap(3);
    await element(by.id('withdraw_button')).tap();
    await expect(element(by.text('Scan QR Code.'))).toExist();
  });

  it('Should show confirm withdrawal screen after 5 seconds.', async (): Promise<void> => {
    await waitFor(element(by.text('Cashing out with:')))
      .toBeVisible()
      .withTimeout(6000);
  });

  it('Swipping the button should show enter pin sheet.', async (): Promise<void> => {
    await element(by.id('swipe_icon')).swipe('right', 'fast', 0.8);
    await expect(element(by.text('Enter your PIN'))).toBeVisible();
  });

  it('Entering pin should show confirm button.', async (): Promise<void> => {
    await element(by.text('Enter your PIN')).tap();
    await element(by.id('one')).tap();
    await element(by.id('two')).tap();
    await element(by.id('three')).tap();
    await element(by.id('four')).tap();
    await expect(element(by.id('confirm_button'))).toBeVisible();
  });

  it('Should show success screen after clicking confirm button.', async () => {
    await element(by.id('confirm_button')).tap();
    await expect(element(by.text('Congrats!'))).toBeVisible();
  });

  it('Should go back to Home screen on clicking go Back to home button.', async () => {
    await element(by.id('back_to_home_link')).tap();
    await expect(element(by.text('Home'))).toBeVisible();
  });
});
