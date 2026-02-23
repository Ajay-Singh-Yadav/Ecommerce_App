import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



//SVG Icons
import Search from '@assets/svg/Search.svg';
import Heart from '@assets/svg/Heart.svg';
import Bag from '@assets/svg/Bag.svg';
import Bell from '@assets/svg/Bell.svg';

import { moderateScale } from 'react-native-size-matters';
import NavigationStrings from './navigationStrings';
import { Sizes } from '@theme/sizes';

const DrawerHeader = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>


      <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.SEARCH)}  > 
        <Search width={moderateScale(24)} height={moderateScale(24)} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Bell width={moderateScale(24)} height={moderateScale(24)} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.WISHLIST)} >
        <Heart width={moderateScale(24)} height={moderateScale(24)} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.CART)}>
        <Bag width={moderateScale(24)} height={moderateScale(24)} />
      </TouchableOpacity>



    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    padding: Sizes.pd_1,
    flexDirection: 'row',
    gap: Sizes.mr_12,
    alignItems: 'center',
    marginHorizontal: Sizes.mr_12,
  },
});
