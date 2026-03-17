import React, { useRef, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/home/HomeScreen';

import CategoryScreen from '@screens/categories/CategoryScreen';
import StudioScreen from '@screens/studio/StudioScreen';
import ProfileScreen from '@screens/profile/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from './navigationStrings';
import { CustomTabBar } from './CustomeTabBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

const DummyScreen = () => null;

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const StudioStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StudioHome" component={StudioScreen} />
    </Stack.Navigator>
  );
};

const BottomNavigation = () => {
    const user = useSelector((state: RootState) => state.user);

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props}
      detachInactiveScreens={true} />}
    >
      <Tab.Screen name={navigationStrings.HOME_STACK} component={HomeScreen} />
      <Tab.Screen
        name={navigationStrings.CATEORY_STACK}
        component={CategoryScreen}
      />
      <Tab.Screen
        name={navigationStrings.STUDIO_STACK}
        component={DummyScreen}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate(navigationStrings.STUDIO);
          },
        })}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE_STACK}
        component={ProfileScreen}
        listeners={({ navigation }) => ({
          tabPress: e => {
          if (!user.isLoggedIn) {
              e.preventDefault();
              navigation.getParent()?.getParent()?.navigate(navigationStrings.LOGIN_SIGNUP);
            }
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
