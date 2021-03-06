/* global it, beforeAll, describe */
import {by, device, expect, element, waitFor} from 'detox';

describe('Onboarding Screen', () => {
  beforeAll(async (): Promise<void> => {
    await device.launchApp();
    try {
      await waitFor(element(by.text('The easiest way to withdraw cash')))
        .toExist()
        .withTimeout(5000);
    } catch (e: any) {
      await element(by.id('switch_account_link')).multiTap(2);
      // await element(by.id('back_button')).tap();
    }
  });

  it('Should show the Create Account Button', async (): Promise<void> => {
    await expect(element(by.id('create_account_button'))).toBeVisible();
  });

  it('Should show the Login Button', async (): Promise<void> => {
    await expect(element(by.id('login_button'))).toBeVisible();
  });

  it('Should show the first slide', async (): Promise<void> => {
    await expect(
      element(by.text('The easiest way to withdraw cash')),
    ).toBeVisible();
  });

  it('Should swipe to the second slide', async (): Promise<void> => {
    await element(by.id('onboarding_swiper')).swipe('left', 'slow');

    await expect(
      element(by.text('The easiest way to withdraw cash')),
    ).not.toBeVisible();

    await expect(
      element(by.text('Collect cash from the ease of your mobile phone')),
    ).toBeVisible();
  });

  it('Should swipe to the third slide', async (): Promise<void> => {
    await element(by.id('onboarding_swiper')).swipe('left', 'slow');

    await expect(
      element(by.text('Collect cash from the ease of your mobile phone')),
    ).not.toBeVisible();

    await expect(
      element(by.text('Say goodbye to withdraw frustrations')),
    ).toBeVisible();
  });

  it('Should swipe to the last slide', async (): Promise<void> => {
    await element(by.id('onboarding_swiper')).swipe('left', 'slow');

    await expect(
      element(by.text('Say goodbye to withdraw frustrations')),
    ).not.toBeVisible();

    await expect(
      element(by.text('Gift and receive money from your friends')),
    ).toBeVisible();
  });

  it('Clicking Login button Should navigate to Login Screen', async (): Promise<void> => {
    await element(by.id('login_button')).tap();
    await expect(element(by.text('Login.'))).toBeVisible();
    await expect(element(by.text('Forgot Password?'))).toBeVisible();
    await element(by.id('back_button')).tap();
  });

  it('Clicking Create Account button Should navigate to Register Screen', async (): Promise<void> => {
    await element(by.id('create_account_button')).tap();
    await expect(element(by.text('Create \nAccount.'))).toBeVisible();
    await expect(element(by.text('Already have an account?'))).toBeVisible();
    await element(by.id('back_button')).tap();
  });
});
