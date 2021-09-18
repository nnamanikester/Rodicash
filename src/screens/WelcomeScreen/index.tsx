import AnimatedGradient from '@/components/AnimatedGradient';
import {useTheme} from '@/contexts/ThemeContext';
import * as React from 'react';
import {Button} from 'react-native';
import styles from './styles';

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  // const {colors} = useTheme();
  const [bgColors, setBgColors] = React.useState<[string, string]>([
    'red',
    'blue',
  ]);

  return (
    <>
      <AnimatedGradient
        style={styles.container}
        colors={bgColors}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Button
          onPress={() => setBgColors(['green', 'yellow'])}
          title="Change"
        />
      </AnimatedGradient>
    </>
  );
};

export default WelcomeScreen;
