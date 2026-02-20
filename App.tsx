import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { LanguageProvider } from '@locales/LanguageContext';
import RootNavigation from '@navigation/RootNavigation';
import { store } from '@redux/store';

const App = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
      }),
    [],
  );

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

const styles = StyleSheet.create({});
