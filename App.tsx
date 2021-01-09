import 'react-native-gesture-handler';
import React, {useState, useEffect, FC} from 'react';
import {StatusBar} from 'react-native';

import firebase from './src/firebase/firebase';
const {auth} = firebase;

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import themeColors from './src/theme.json';

import Loading from './src/components/loading';

import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './src/navigation/loginStack';
import MyDrawer from './src/navigation/drawer';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const theme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: themeColors['color-primary-500'],
    accent: themeColors['contrast'],
  },
};

const App: FC = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<Object | null>(null);

  const onAuthStateChanged = (userProp: Object | null) => {
    setUser(userProp);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, 1500);
  }, []);

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <PaperProvider theme={theme}>
            {initializing ? <Loading /> : user ? <MyDrawer /> : <LoginStack />}
          </PaperProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
