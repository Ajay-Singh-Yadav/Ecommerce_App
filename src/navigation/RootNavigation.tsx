import { StyleSheet, Text, View } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavigationStrings from './NavigationStrings';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './BottomNavigator';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name={NavigationStrings.BOTTOM_TAB}
          component={BottomNavigator}
        />
        <Stack.Screen name={NavigationStrings.LOGIN} component={LoginScreen} />
        <Stack.Screen
          name={NavigationStrings.SIGNUP}
          component={SignupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
