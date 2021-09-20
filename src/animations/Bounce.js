import React from 'react';
import {Animated} from 'react-native';

const Bounce = ({children, from, to, duration}) => {
  const [animate] = React.useState(new Animated.Value(from));

  React.useEffect(() => {
    const bounce = () => {
      Animated.timing(animate, {
        duration,
        toValue: to,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(animate, {
          duration,
          toValue: from,
          useNativeDriver: false,
        }).start(() => {
          animate.setValue(from);
          bounce();
        });
      });
    };

    bounce();
  }, []);

  const bounceStyle = {
    bottom: animate,
  };

  return <Animated.View style={bounceStyle}>{children}</Animated.View>;
};

export default Bounce;
