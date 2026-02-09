import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Home from '@assets/svg/Home.svg';
import HeartIcon from '@assets/svg/HeartIcon.svg';
import CartBag from '@assets/svg/CartBag.svg';
import ProfileIcon from '@assets/svg/ProfileIcon.svg';

import { rh, rpm, rw } from '@theme/responsive';
import colors from '@theme/colors';
import NavigationStrings from '../navigation/NavigationStrings';

const TAB_ICONS = {
  [NavigationStrings.HOME_STACK]: Home,
  [NavigationStrings.CATEGORIES_STACK]: HeartIcon,
  [NavigationStrings.STUDIO_STACK]: CartBag,
  [NavigationStrings.PROFILE_STACK]: ProfileIcon,
};

const CustomTabBar = ({ state, navigation }: any) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const Icon = TAB_ICONS[route.name];

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tab}
            activeOpacity={0.9}
            onPress={() => !isFocused && navigation.navigate(route.name)}
          >
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: colors.tab,
                },
              ]}
            >
              <Icon
                width={rw(20)}
                height={rw(20)}
                fill={isFocused ? colors.background2 : colors.muted}
                stroke={colors.background2}
                strokeOpacity={1}
              />
            </View>
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
    height: rh(50),
    backgroundColor: colors.primary2,
    borderRadius: rh(40),
    marginHorizontal: rpm(14),
    marginBottom: rpm(20),
    paddingHorizontal: rpm(10),
    alignItems: 'center',
  },

  tab: {
    flex: 1,
    alignItems: 'center',
  },

  circle: {
    width: rw(40),
    height: rw(40),
    borderRadius: rw(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
