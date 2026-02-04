import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

// SVGs
import Home from '@assets/svg/Home.svg';
import HomeFilled from '@assets/svg/HomeFilled.svg';
import Category from '@assets/svg/Category.svg';
import CategoryFilled from '@assets/svg/CategoryFilled.svg';
import ProfileFilled from '@assets/svg/ProfileFilled.svg';
import Profile from '@assets/svg/Profile.svg';
import Studio from '@assets/svg/Studio.svg';

import { br, rh, rpm, rw } from '@theme/responsive';

import { ReactElement } from 'react';

type TabIconRenderer = (focused: boolean) => ReactElement;

import NavigationStrings from '../navigation/NavigationStrings';
import colors from '@theme/colors';
import { pixelRatio } from '@theme/device';

const TAB_ICONS = {
  [NavigationStrings.HOME_STACK]: (focused: boolean) =>
    focused ? (
      <HomeFilled width={rw(24)} height={rh(24)} />
    ) : (
      <Home width={rw(24)} height={rh(24)} />
    ),

  [NavigationStrings.CATEGORIES_STACK]: (focused: boolean) =>
    focused ? (
      <CategoryFilled width={rw(24)} height={rh(24)} />
    ) : (
      <Category width={rw(24)} height={rh(24)} />
    ),

  [NavigationStrings.STUDIO_STACK]: () => (
    <Studio width={rw(24)} height={rh(24)} />
  ),

  [NavigationStrings.PROFILE_STACK]: (focused: boolean) =>
    focused ? (
      <ProfileFilled width={rw(24)} height={rh(24)} />
    ) : (
      <Profile width={rw(24)} height={rh(24)} />
    ),
};

type TabRouteName = keyof typeof TAB_ICONS;




const CustomTabBar = ({ state, navigation }: any) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const renderIcon = TAB_ICONS[route.name as TabRouteName];

        if (!renderIcon) {
          console.warn('Missing tab icon for:', route.name);
          return null;
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => !isFocused && navigation.navigate(route.name)}
            style={styles.tab}
            activeOpacity={0.85}
          >
            {renderIcon(isFocused)}
           
          </TouchableOpacity>
        );
      })}
    </View>
  );
};



export default CustomTabBar;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: rh(60),
    backgroundColor: colors.neutral_0,
    borderTopWidth:0.5 / pixelRatio,
    borderTopColor: colors.neutral_300
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIndicator: {
    marginTop: rpm(6),
    width: rw(6),
    height: rw(6),
    borderRadius: br(3),
 
  },
});
