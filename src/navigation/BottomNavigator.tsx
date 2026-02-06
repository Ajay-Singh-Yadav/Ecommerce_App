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
import CartScreen from '../screens/cart/CartScreen';

import ProductList from '../screens/productDetails/components/ProductList';
import ProductDetails from '../screens/productDetails/components/ProductDetails';
import SearchSceen from '../screens/search/SearchSceen';
import StudioScreen from '../screens/studio/StudioScreen';
import CustomTabBar from './CustomTabBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptionsWithSlide: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'fade',
  gestureEnabled: true,
};

const HomeStackScreen = () => (
  <Stack.Navigator screenOptions={screenOptionsWithSlide}>
    <Stack.Screen name={NavigationStrings.HOME_SCREEN} component={HomeScreen} />
    <Stack.Screen
      name={NavigationStrings.SEARCH_SCREEN}
      component={SearchSceen}
    />
    <Stack.Screen
      name={NavigationStrings.WISHLIST}
      component={WishlistScreen}
    />

    <Stack.Screen
      name={NavigationStrings.PRODUCT_DETAILS}
      component={ProductDetails}
    />
  </Stack.Navigator>
);

const CategoriesStackScreen = () => (
  <Stack.Navigator screenOptions={screenOptionsWithSlide}>
    <Stack.Screen
      name={NavigationStrings.CATEGORIES}
      component={CategoryScreen}
    />
    <Stack.Screen
      name={NavigationStrings.WISHLIST}
      component={WishlistScreen}
    />

    <Stack.Screen
      name={NavigationStrings.PRODUCT_LIST}
      component={ProductList}
    />
  </Stack.Navigator>
);
const StudioStackScreen = () => (
  <Stack.Navigator screenOptions={screenOptionsWithSlide}>
    <Stack.Screen name={NavigationStrings.STUDIO} component={StudioScreen} />

    <Stack.Screen
      name={NavigationStrings.PRODUCT_LIST}
      component={ProductList}
    />
  </Stack.Navigator>
);

const ProfileStackScreen = () => (
  <Stack.Navigator screenOptions={screenOptionsWithSlide}>
    <Stack.Screen name={NavigationStrings.PROFILE} component={ProfileScreen} />
    <Stack.Screen
      name={NavigationStrings.WISHLIST}
      component={WishlistScreen}
    />
  </Stack.Navigator>
);

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name={NavigationStrings.HOME_STACK}
        component={HomeStackScreen}
      />

      <Tab.Screen
        name={NavigationStrings.CATEGORIES_STACK}
        component={CategoriesStackScreen}
      />
      <Tab.Screen
        name={NavigationStrings.STUDIO_STACK}
        component={StudioStackScreen}
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
