import * as React from 'react';
import * as UI from '@/components/common';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <>
      <UI.Layout>
        <UI.Text h1>Login</UI.Text>
      </UI.Layout>
    </>
  );
};

export default LoginScreen;
