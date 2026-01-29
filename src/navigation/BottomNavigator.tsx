import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import NavigationStrings from './NavigationStrings';
import WishlistScreen from '../screens/wishlist/WishlistScreen';
import HomeScreen from '../screens/home/HomeScreen';
import CategoryScreen from '../screens/categories/CategoryScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SearchSceen from '../screens/search/SearchSceen';
import CartScreen from '../screens/cart/CartScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptionsWithSlide: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_bottom',
  gestureEnabled: true,
};

const HomeStackScreen = () => (
  <Stack.Navigator screenOptions={screenOptionsWithSlide}>
    <Stack.Screen name={NavigationStrings.HOME_SCREEN} component={HomeScreen} />
    <Stack.Screen
      name={NavigationStrings.SEARCH_SCREEN}
      component={SearchSceen}
    />
  </Stack.Navigator>
);
const WishlistStackScreen = () => (
  <Stack.Navigator screenOptions={screenOptionsWithSlide}>
    <Stack.Screen
      name={NavigationStrings.WISHLIST}
      component={WishlistScreen}
    />
    <Stack.Screen
      name={NavigationStrings.SEARCH_SCREEN}
      component={SearchSceen}
    />
  </Stack.Navigator>
);
const CategoriesStackScreen = () => (
  <Stack.Navigator   screenOptions={screenOptionsWithSlide}>
    <Stack.Screen
      name={NavigationStrings.CATEGORIES}
      component={CategoryScreen}
    />
    <Stack.Screen
      name={NavigationStrings.SEARCH_SCREEN}
      component={SearchSceen}
    />
  </Stack.Navigator>
);
const CartStackScreen = () => (
  <Stack.Navigator  screenOptions={screenOptionsWithSlide}>
    <Stack.Screen name={NavigationStrings.CART} component={CartScreen} />
    <Stack.Screen
      name={NavigationStrings.SEARCH_SCREEN}
      component={SearchSceen}
    />
  </Stack.Navigator>
);
const ProfileStackScreen = () => (
  <Stack.Navigator screenOptions={screenOptionsWithSlide}>
    <Stack.Screen name={NavigationStrings.PROFILE} component={ProfileScreen} />
    <Stack.Screen
      name={NavigationStrings.SEARCH_SCREEN}
      component={SearchSceen}
    />
  </Stack.Navigator>
);

const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen
        name={NavigationStrings.HOME_STACK}
        component={HomeStackScreen}
      />
      <Tab.Screen
        name={NavigationStrings.WISHLIST_STACK}
        component={WishlistStackScreen}
      />
      <Tab.Screen
        name={NavigationStrings.CATEGORIES_STACK}
        component={CategoriesStackScreen}
      />
      <Tab.Screen
        name={NavigationStrings.PROFILE_STACK}
        component={ProfileStackScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
