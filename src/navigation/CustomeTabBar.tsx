import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import HomeIcon from '@assets/svg/Home.svg';
import CategoryIcon from '@assets/svg/Category.svg';
import PlayIcon from '@assets/svg/Play.svg';
import ProfileIcon from '@assets/svg/Profile.svg';
import User from '@assets/svg/User.svg';
import navigationStrings from './navigationStrings';
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';

export const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        let IconComponent;

        switch (route.name) {
          case navigationStrings.HOME_STACK:
            IconComponent = HomeIcon;
            break;
          case navigationStrings.CATEORY_STACK:
            IconComponent = CategoryIcon;
            break;
          case navigationStrings.STUDIO_STACK:
            IconComponent = PlayIcon;
            break;
          case navigationStrings.PROFILE_STACK:
            IconComponent = ProfileIcon;
            break;
          default:
            IconComponent = HomeIcon;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (event.defaultPrevented) {
            return;
          }

          if (route.name === navigationStrings.STUDIO_STACK) {
            navigation.navigate(navigationStrings.STUDIO);
          } else {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={route.key} style={styles.tabButtonContainer}>
            <TouchableOpacity onPress={onPress} style={[styles.tabButton]}>
              <IconComponent
                width={Sizes.w_20}
                height={Sizes.h_20}
                fill={isFocused ? colors.primary : colors.ArsenicBlack}
                strokeOpacity={0.0}
                strokeWidth={0.5}
              />
              <Text
                style={[
                  styles.tabButtonText,
                  {
                    color: isFocused ? colors.primary : colors.ArsenicBlack,
                    fontWeight: isFocused ? '600' : '400',
                    fontSize: isFocused ? Sizes.font_9 : Sizes.font_8,
                  },
                ]}
              >
                {route.name}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: Sizes.h_50,
    backgroundColor: '#fff',
    paddingVertical:5
  },
  tabButtonContainer: {
    flex: 1,
    marginHorizontal: Sizes.mr_8,
   

  },

  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: Sizes.rd_8,
   
  },
  tabButtonText: {},
});
