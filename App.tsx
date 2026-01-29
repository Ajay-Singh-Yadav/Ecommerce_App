import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import RootNavigation from './src/navigation/RootNavigation';


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
          <StatusBar
              barStyle="dark-content"
              backgroundColor='transparent'
              translucent={false}
            />
        <RootNavigation />
    
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
