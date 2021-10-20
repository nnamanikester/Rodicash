/* global it, beforeAll, describe */
import {by, device, expect, element, waitFor} from 'detox';

describe('Register Screen', () => {
  beforeAll(async (): Promise<void> => {
    await device.launchApp();
    await waitFor(element(by.text('The easiest way to withdraw cash')))
      .toExist()
      .withTimeout(5000);
    await element(by.id('create_account_button')).tap();
  });

  it('Should show create account title', async (): Promise<void> => {
    await expect(element(by.text('Create \nAccount.'))).toBeVisible();
  });

  it('Should show name error if submit form with empty name field.', async (): Promise<void> => {
    await element(by.id('sign_up_button')).tap();
    await expect(element(by.text('Name cannot be blank.'))).toBeVisible();
    await element(by.id('okay_button')).tap();
  });

  it('Should show email error if submit form with invalid email or empty field.', async (): Promise<void> => {
    await element(by.id('fullname_field')).typeText('John Kester');
    await element(by.id('layout')).tap();
    await element(by.id('sign_up_button')).tap();
    await expect(
      element(by.text('Please enter a valid email address.')),
    ).toBeVisible();
    await element(by.id('okay_button')).tap();
  });

  it('Should show phone error if submit form with empty phone field.', async (): Promise<void> => {
    await element(by.id('email_field')).typeText('naijagotmag@gmail.com');
    await element(by.id('layout')).tap();
    await element(by.id('sign_up_button')).tap();
    await expect(
      element(by.text('Please enter a valid phone number.')),
    ).toBeVisible();
    await element(by.id('okay_button')).tap();
  });

  it('Should show password error if password is less than 6 charachers or empty.', async (): Promise<void> => {
    await element(by.id('phone_field')).typeText('09098765432');
    await element(by.id('layout')).tap();
    await element(by.id('sign_up_button')).tap();
    await expect(
      element(by.text('Password is required and must be up to 6 characters.')),
    ).toBeVisible();
    await element(by.id('okay_button')).tap();
    await element(by.id('password_field')).typeText('123');
    await element(by.id('layout')).tap();
    await element(by.id('sign_up_button')).tap();
    await expect(
      element(by.text('Password is required and must be up to 6 characters.')),
    ).toBeVisible();
    await element(by.id('okay_button')).tap();
  });

  // it('Should successfully create an account', async (): Promise<void> => {
  //   await element(by.id('password_field')).typeText('456');

  //   await element(by.id('sign_up_button')).tap();

  //   await waitFor(
  //     element(by.text('We have sent a 6-digit code to your mailbox')),
  //   )
  //     .toExist()
  //     .withTimeout(5000);
  // });
});
