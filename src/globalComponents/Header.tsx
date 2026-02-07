import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import colors from '@theme/colors';
import { rh, rpm, rw } from '@theme/responsive';
import { imagePath } from '@constants/imagePath';
import CommanButton from './CommanButton';

//SVG Icons
import BackArrow from '@assets/svg/BackArrow.svg';
import Bag from '@assets/svg/Bag.svg';
import HeartIcon from '@assets/svg/HeartIcon.svg';
import Share from '@assets/svg/Share.svg';
import BellIcon from '@assets/svg/BellIcon.svg';

import { HeaderProps } from './Type';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '@navigation/NavigationStrings';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamList } from '@navigation/Type';

const Header: React.FC<HeaderProps> = ({
  logo,
  search,
  bell,
  heart,
  bag,
  backArrow,
  share,
  headertStyle,
  backPress,
  subHeaderStyle,

}) => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();



  const handleSearch = () => {
    navigation.navigate(NavigationStrings.SEARCH_SCREEN)
  }
  const handleWishlist = () => {
    navigation.navigate(NavigationStrings.WISHLIST)
  }


  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          height: rh(70),
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: colors.primary,

        },
        leftRightContainer: {
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',

        },
        leftContainer: {
          width: rw(70),
          height: rh(35),

        },
        rightContainer: {
          flexDirection: 'row',
          width: rw(130),
          justifyContent: 'space-around',
          alignItems: 'center',
        },
        logoStyle: {
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        },
        backArrow: {},
        searchIcon: {
          width: rw(30),
          height: rh(30),
          color: colors.neutral_0,
        },
      }),
    [],
  );

  return (
    <View style={[styles.container, headertStyle]}>
      <View style={[styles.leftRightContainer, subHeaderStyle]}>
        <View style={styles.leftContainer}>
          {logo && (
            <Image source={imagePath.logoIcon} style={styles.logoStyle} />
          )}
          {backArrow && (
            <CommanButton onPress={backPress} Icon={<BackArrow width={rw(14)} height={rh(14)} />} />
          )}
        </View>
        <View style={styles.rightContainer}>
          {/* {search && (
            <CommanButton onPress={handleSearch}
              Icon={<Bag width={rw(14)} height={rh(14)} />}
            />
          )} */}

          {bell && (
            <CommanButton Icon={<BellIcon width={rw(14)} height={rh(14)} />} />
          )}
          {share && (
            <CommanButton Icon={<Share width={rw(14)} height={rh(14)} />} />
          )}
          {heart && (
            <CommanButton onPress={handleWishlist} Icon={<HeartIcon width={rw(16)} height={rh(16)} />} />
          )}
          {bag && (
            <CommanButton Icon={<Bag width={rw(16)} height={rh(16)} />} />
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
