import * as React from 'react';
import {Text, View} from 'react-native';
import {AnimatedSVGPath} from 'react-native-svg-animations';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  return (
    <View>
      <Text>Welcome home</Text>
    </View>
  );
};

export default WelcomeScreen;
