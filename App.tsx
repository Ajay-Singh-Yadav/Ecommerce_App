import { StatusBar, StyleSheet, Text, View } from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';
import React, { useMemo, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { LanguageProvider } from '@locales/LanguageContext';
import RootNavigation from '@navigation/RootNavigation';
import { store } from '@redux/store';
import Config from 'react-native-config';

const App = () => {
  useEffect(() => {
    console.log('ENV:', Config.ENV);
    console.log('BASE_URL:', Config.BASE_URL);
  }, []);



  
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <LanguageProvider>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <RootNavigation />
        </LanguageProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
