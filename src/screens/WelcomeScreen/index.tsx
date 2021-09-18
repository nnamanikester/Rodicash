import * as React from 'react';
import {Text, View} from 'react-native';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  return (
    <View>
      <Text>Welcome home</Text>
    </View>
  );
};

export default WelcomeScreen;
