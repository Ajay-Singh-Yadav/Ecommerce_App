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
import Menu from '@assets/svg/Menu.svg';
import navigationStrings from './navigationStrings';
import { CustomDrawer } from './CustomDrawer';
import { moderateScale } from 'react-native-size-matters';
import { DrawerActions } from '@react-navigation/native';
import { Sizes } from '@theme/sizes';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const isRTL = I18nManager.isRTL;

  return (
    <Drawer.Navigator
      key={isRTL ? 'rtl-drawer' : 'ltr-drawer'}
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },

        drawerStyle: {
          marginTop: moderateScale(50),
          borderTopStartRadius: 0,
          borderBottomStartRadius: 0,
          borderTopEndRadius: Sizes.rd_20,
          borderBottomEndRadius: Sizes.rd_20,
        },

        overlayColor: 'transparent',
        headerTitle: () => '',

        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
              gap: Sizes.mr_8,
              marginHorizontal: Sizes.mr_8,
            }}
          >
            <TouchableOpacity
              style={{
                transform: [{ scaleX: isRTL ? -1 : 1 }],
              }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Menu width={24} height={24} />
            </TouchableOpacity>

            <Logo width={26} height={26} color={colors.white} />
          </View>
        ),

        headerRight: () => <DrawerHeader />,
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
