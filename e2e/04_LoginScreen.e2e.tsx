/* global it, beforeAll, describe */
import {by, device, expect, element, waitFor} from 'detox';

describe('Login Screen', () => {
  beforeAll(async (): Promise<void> => {
    await device.launchApp();
    try {
      await waitFor(element(by.text('The easiest way to withdraw cash')))
        .toExist()
        .withTimeout(5000);
      await element(by.id('login_button')).tap();
    } catch (e: any) {
      await element(by.id('switch_account_link')).multiTap(2);
      await element(by.id('login_button')).tap();
    }
  });

  it('Should show Login title', async (): Promise<void> => {
    await expect(element(by.text('Login.'))).toBeVisible();
  });

  it('Clicking on Reset link should navigate to reset password screen', async () => {
    await element(by.id('reset_link')).tap();
    await expect(
      element(by.text('Enter your email address to reset your password.')),
    ).toBeVisible();
    await element(by.id('back_button')).tap();
  });

  it('Should show email error if submit form with invalid email or empty field.', async (): Promise<void> => {
    await element(by.id('login_button')).tap();
    await expect(
      element(by.text('Please enter a valid email address.')),
    ).toBeVisible();
    await element(by.id('okay_button')).tap();
  });

  it('Should show password error if password is less than 6 charachers or empty.', async (): Promise<void> => {
    await element(by.id('email_field')).typeText('nnamanikester@gmail.com');
    await element(by.text('Login.')).tap();
    await element(by.id('login_button')).tap();
    await expect(
      element(by.text('Password is required and must be up to 6 characters.')),
    ).toBeVisible();
    await element(by.id('okay_button')).tap();
  });

  it('Should navigate to Home screen after on successful login.', async (): Promise<void> => {
    await element(by.id('password_field')).typeText('123456');

    await element(by.id('login_button')).tap();

    await waitFor(element(by.text('Home')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.text('Hello, John'))).toBeVisible();
  });
});
