import React from 'react';
import {Animated} from 'react-native';

const Zoom = ({children, duration, from, to, delay, style}) => {
  const [animate] = React.useState(new Animated.Value(from));

  const animStyle = {
    width: '100%',
    transform: [
      {
        scale: animate,
      },
    ],
    ...style,
  };

  React.useEffect(() => {
    Animated.timing(animate, {
      toValue: to,
      delay: delay || 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, []);

  return <Animated.View style={animStyle}>{children}</Animated.View>;
};

export default Zoom;
