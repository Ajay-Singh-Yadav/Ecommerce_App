import React, { useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/home/HomeScreen';

import CategoryScreen from '@screens/categories/CategoryScreen';
import StudioScreen from '@screens/studio/StudioScreen';
import ProfileScreen from '@screens/profile/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from './navigationStrings';




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


  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name={navigationStrings.HOME_STACK} component={HomeScreen}  />
        <Tab.Screen name={navigationStrings.CATEORY_STACK} component={CategoryScreen} />
        <Tab.Screen name={navigationStrings.STUDIO_STACK} component={DummyScreen}   listeners={({ navigation }) => ({
    tabPress: e => {
      e.preventDefault(); 
      navigation.navigate(navigationStrings.STUDIO); 
    },
  })} />
        <Tab.Screen name={navigationStrings.PROFILE_STACK} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomNavigation