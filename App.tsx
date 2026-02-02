import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { LanguageProvider } from '@locales/LanguageContext';
import RootNavigation from '@navigation/RootNavigation';

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
    <GestureHandlerRootView>
      <LanguageProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={false}
        />
        <RootNavigation />
      </LanguageProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
