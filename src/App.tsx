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
import {APP_SETTINGS_STORAGE, USER_STORAGE} from '@/constants';
import {setAppSettings, setUser} from './store/actions';

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
    const rawAppSettings = await EncryptedStorage.getItem(APP_SETTINGS_STORAGE);
    if (rawUser) {
      store.dispatch(setUser(JSON.parse(rawUser)) as any);
    }
    if (rawAppSettings) {
      store.dispatch(setAppSettings(JSON.parse(rawAppSettings)) as any);
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
