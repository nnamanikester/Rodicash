import * as React from 'react';
import * as UI from '@/components/common';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  return (
    <>
      <UI.Layout>
        <UI.Text h1>Welcome Back</UI.Text>
      </UI.Layout>
    </>
  );
};

export default WelcomeScreen;
