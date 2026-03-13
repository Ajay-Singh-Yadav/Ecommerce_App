import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import StudioScreen from '@screens/studio/StudioScreen';
import SearchSceen from '@screens/search/SearchSceen';
import CartScreen from '@screens/cart/CartScreen';
import navigationStrings from './navigationStrings';
import LoginSignup from '@screens/profile/components/LoginSignup';
import WishlistScreen from '@screens/wishlist/WishlistScreen';
import SplashScreen from '@screens/splash/SplashScreen';

import ProductDetail from '@screens/productDetails/ProductDtails';
import ProductListingScreen from '@screens/productListing/ProductListingScreen';
import OderScreen from '@screens/oders/OderScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'fade' }}
      >
        <Stack.Screen
          name={navigationStrings.SPLASH_SCREEN}
          component={SplashScreen}
        />
        <Stack.Screen
          name={navigationStrings.DRAWER}
          component={DrawerNavigation}
        />
        <Stack.Screen
          name={navigationStrings.STUDIO}
          component={StudioScreen}
        />
        <Stack.Screen name={navigationStrings.SEARCH} component={SearchSceen} />
        <Stack.Screen
          name={navigationStrings.PRODUCT_DETAILS}
          component={ProductDetail}
        />
        <Stack.Screen
          name={navigationStrings.PRODUCT_LIST}
          component={ProductListingScreen}
        />

        {/* Profile Tab */}

        <Stack.Screen name="order" component={OderScreen} />

        <Stack.Screen
          name={navigationStrings.WISHLIST}
          component={WishlistScreen}
        />
        <Stack.Screen name={navigationStrings.CART} component={CartScreen} />
        <Stack.Screen
          name={navigationStrings.LOGIN_SIGNUP}
          component={LoginSignup}
          options={{ animation: 'slide_from_bottom' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
