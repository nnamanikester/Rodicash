import React from 'react';
import {Animated} from 'react-native';

const SlideX = ({children, from, to, duration, delay}) => {
  const [animate] = React.useState(new Animated.Value(from));

  React.useEffect(() => {
    (() => {
      Animated.timing(animate, {
        duration,
        delay: delay || 0,
        toValue: to,
        useNativeDriver: false,
      }).start();
    })();
  }, []);

  const slideStyle = {
    left: animate,
    width: '100%',
  };

  return <Animated.View style={slideStyle}>{children}</Animated.View>;
};

export default SlideX;
