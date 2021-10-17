import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '@/store';
import NavigationFlow from '@/navigation';

describe('OnbaordingScreen', (): void => {
  // const navigate = jest.fn();

  const component = (
    <Provider store={store}>
      <NavigationFlow />
    </Provider>
  );

  test('If "Login" button is visible', (): void => {
    const {getByText} = render(component);
    const loginButton = getByText('LOGIN');
    expect(loginButton).toBeDefined();
  });

  it('Should navigate to LoginScreen after clicking on "Login" button', async (): Promise<void> => {
    const {getByText, findByText} = render(component);
    const loginButton = getByText('LOGIN');
    fireEvent.press(loginButton);
    const loginPageTitle = await findByText('Login.');
    const passwordReset = await findByText('Forgot Password?');

    expect(loginPageTitle).toBeTruthy();
    expect(passwordReset).toBeTruthy();
  });

  test('If "Create Account" button is visible', (): void => {
    const {getByText} = render(component);
    const registerButton = getByText('CREATE ACCOUNT');
    expect(registerButton).toBeDefined();
  });

  it('Should navigate to "RegisterScreen" after clicking on "Creact Account" button', async (): Promise<void> => {
    const {getByText, findByText} = render(component);
    const registerButton = getByText('CREATE ACCOUNT');
    fireEvent.press(registerButton);
    const registerPageTitle = await findByText('Create \nAccount.');
    const alreadyRegistered = await findByText('Already have an account?');

    expect(registerPageTitle).toBeTruthy();
    expect(alreadyRegistered).toBeTruthy();
  });
});
