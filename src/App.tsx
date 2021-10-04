import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {AppearanceProvider} from 'react-native-appearance';
import {listenOrientationChange as lor} from 'react-native-responsive-screen';
import AnimatedSplash from '@/components/AnimatedSplash';
import NavigationFlow from '@/navigation';
import store from '@/store';
import {ThemeProvider, ThemeContext} from '@/contexts/ThemeContext';
import SplashScreen from './components/SplashScreen';

interface AppProps {}

interface AppState {
  loaded: boolean;
}

class App extends React.Component<AppProps, AppState> {
  static contextType = ThemeContext;

  state = {
    loaded: false,
  };

  componentDidMount(): void {
    lor(this);

    setTimeout(() => {
      this.setState({loaded: true});
    }, 3000);
  }

  render() {
    const {loaded} = this.state;
    const {colors} = this.context;

    return (
      <AnimatedSplash
        showStatusBar
        isLoaded={loaded}
        preload={false}
        logoImage={require('../assets/images/icon-white.png')}
        backgroundColor={colors.primary}
        customComponent={<SplashScreen />}>
        <SafeAreaProvider>
          <Provider store={store}>
            <AppearanceProvider>
              <ThemeProvider>
                <NavigationFlow />
              </ThemeProvider>
            </AppearanceProvider>
          </Provider>
        </SafeAreaProvider>
      </AnimatedSplash>
    );
  }
}

export default App;
