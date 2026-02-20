import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawerNavigation from './DrawerNavigation';
import StudioScreen from '@screens/studio/StudioScreen';
import SearchSceen from '@screens/search/SearchSceen';
import CartScreen from '@screens/cart/CartScreen';
import navigationStrings from './navigationStrings';


const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false, animation:'fade'}}>
        <Stack.Screen name={navigationStrings.DRAWER}  component={DrawerNavigation} />
         <Stack.Screen
          name={navigationStrings.STUDIO} 
          component={StudioScreen}
          
        />
        <Stack.Screen name={navigationStrings.SEARCH} component={SearchSceen} />
        <Stack.Screen name={navigationStrings.CART}  component={CartScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation

