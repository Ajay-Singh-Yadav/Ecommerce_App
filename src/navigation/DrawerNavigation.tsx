import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import DrawerHeader from './DrawerHeader';
import colors from '@theme/colors';
import Logo from '@assets/svg/Logo.svg';
import navigationStrings from './navigationStrings';
import { CustomDrawer } from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitle: () => (
          <View style={styles.headerLogo}>
            <Logo width={35} height={35} />
          </View>
        ),
        headerRight: () => <DrawerHeader />,
      })}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name={navigationStrings.BOTTOM_TABS} component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  headerLogo: {
   
  },
});
