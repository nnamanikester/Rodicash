/* global it, beforeAll, describe */
import {by, device, expect, element, waitFor} from 'detox';

describe('Transactions Screen', () => {
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
    await element(by.id('transactions_tab_navigation')).tap();
  });

  it('Should show tranfer title.', async (): Promise<void> => {
    await expect(element(by.text('Transfer'))).toBeVisible();
  });

  it('Should show available cash.', async (): Promise<void> => {
    await expect(element(by.text('Available Cash'))).toBeVisible();
  });

  it('Clicking request tab should show request form.', async (): Promise<void> => {
    await element(by.id('request_tab')).tap();
    await expect(element(by.text('How much?'))).toBeVisible();
    await expect(element(by.text('Reason for requesting cash'))).toBeVisible();
    await expect(element(by.text('Send bill to?'))).toBeVisible();
  });

  it('Clicking send tab should show send form.', async (): Promise<void> => {
    await element(by.id('send_tab')).tap();
    await expect(element(by.text('Amount'))).toBeVisible();
    await expect(element(by.text('Reason for sending cash'))).toBeVisible();
    await expect(element(by.text("Receiver's email"))).toBeVisible();
  });

  it('Clicking select contact should show contact modal.', async (): Promise<void> => {
    await element(by.id('select_contact_button')).tap();
    await expect(element(by.text('Select Contact'))).toBeVisible();
    await element(by.text('nnamanikester@gmail.com')).tap();
  });

  it("Selecting contact should fill the receiver's email.", async (): Promise<void> => {
    await element(by.id('select_contact_button')).tap();
    await element(by.text('nnamanikester@gmail.com')).tap();
    await expect(element(by.id('email_field'))).toHaveText(
      'nnamanikester@gmail.com',
    );
  });

  it('Clicking on continue button should show enter pin modal.', async (): Promise<void> => {
    await element(by.id('continue_button')).tap();
    await expect(element(by.text('Enter your PIN'))).toBeVisible();
  });

  it('Entering PIN should show confirm button.', async (): Promise<void> => {
    await element(by.id('one')).tap();
    await element(by.id('two')).tap();
    await element(by.id('three')).tap();
    await element(by.id('four')).tap();
    await expect(element(by.id('confirm_button'))).toBeVisible();
  });
});
