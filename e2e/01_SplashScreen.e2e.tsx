/* global it, beforeAll, describe */
import {by, device, expect, element} from 'detox';

describe('SplashScreen', () => {
  beforeAll(async (): Promise<void> => {
    await device.launchApp();
  });

  it('Should show app name on startup', async (): Promise<void> => {
    await expect(element(by.text('Rodi Cash'))).toBeVisible();
  });
});
