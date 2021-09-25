import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {AppearanceProvider} from 'react-native-appearance';
import {listenOrientationChange as lor} from 'react-native-responsive-screen';
import NavigationFlow from '@/navigation';
import store from '@/store';
import {ThemeProvider} from '@/contexts/ThemeContext';

interface AppProps {}

interface AppState {
  loaded: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount(): void {
    lor(this);
    this.setState({loaded: true});
  }

  render() {
    const {loaded} = this.state;

    if (!loaded) {
      return <View />;
    }

    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <AppearanceProvider>
            <ThemeProvider>
              <NavigationFlow />
            </ThemeProvider>
          </AppearanceProvider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}

export default App;
