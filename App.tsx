import { LogBox, StatusBar, StyleSheet, Text, View } from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';
import React, { useMemo, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { LanguageProvider } from '@locales/LanguageContext';
import RootNavigation from '@navigation/RootNavigation';
// import { store } from '@redux/store';
import Config from 'react-native-config';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@redux/store';
LogBox.ignoreAllLogs();

const App = () => {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
