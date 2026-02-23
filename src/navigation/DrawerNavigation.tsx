import {
  Image,
  StyleSheet,
  Text,
  View,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import DrawerHeader from './DrawerHeader';
import colors from '@theme/colors';
import Logo from '@assets/svg/Logo.svg';
import navigationStrings from './navigationStrings';
import { CustomDrawer } from './CustomDrawer';
import { moderateScale } from 'react-native-size-matters';
import { DrawerActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const isRTL = I18nManager.isRTL;
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
       

        headerTitleContainerStyle: {
          width: 'auto',
          borderWidth:1,
          
        },

        // headerTitle: () => ,

        drawerStyle: { marginTop: moderateScale(50) },
        headerLeft: () =>
          
          !isRTL && (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={{ marginHorizontal: 12, borderWidth:1 }}
            >
              <Logo width={24} height={24} />
            </TouchableOpacity>
          ),
        // headerRight: () => <DrawerHeader />,
             headerRight: () =>
          !isRTL ? (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={{ marginHorizontal: 12 }}
            >
              <Logo width={24} height={24} />
            </TouchableOpacity>
          ) : (
            <DrawerHeader />
          ),
      })}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name={navigationStrings.BOTTOM_TABS}
        component={BottomNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  headerLogo: {},
});
