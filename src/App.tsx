import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {listenOrientationChange as lor} from 'react-native-responsive-screen';
import AnimatedSplash from '@/components/AnimatedSplash';
import NavigationFlow from '@/navigation';
import {ThemeProvider, ThemeContext} from '@/contexts/ThemeContext';
import SplashScreen from './components/SplashScreen';
import {store} from './store';
import EncryptedStorage from 'react-native-encrypted-storage';
import {USER_STORAGE} from '@/constants';
import {SET_USER} from './store/types';

interface AppProps {}

interface AppState {
  loaded: boolean;
}

class App extends React.Component<AppProps, AppState> {
  static contextType = ThemeContext;

  state = {
    loaded: false,
    user: null,
  };

  async componentDidMount(): Promise<void> {
    lor(this);

    const rawUser = await EncryptedStorage.getItem(USER_STORAGE);
    if (rawUser) {
      const parsedUser = JSON.parse(rawUser);
      if (parsedUser) {
        store.dispatch({type: SET_USER, payload: parsedUser});
      }
    }

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
            <ThemeProvider>
              <NavigationFlow />
            </ThemeProvider>
          </Provider>
        </SafeAreaProvider>
      </AnimatedSplash>
    );
  }
}

export default App;
