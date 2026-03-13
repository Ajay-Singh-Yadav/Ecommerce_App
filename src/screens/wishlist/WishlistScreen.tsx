import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useMemo } from 'react';
import Header from '@global/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import { categories } from '@constants/categories';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '@navigation/navigationStrings';

const WishlistScreen = () => {

const navigation = useNavigation<any>();



  const handleWishlist = async () => {
  const user = await AsyncStorage.getItem('userLoggedIn');

  if (!user) {
    navigation.navigate(navigationStrings.LOGIN_SIGNUP);
    return;
  }

  // add to wishlist logic
};
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.white,
        },

        title: {
          fontSize: Sizes.font_16,
        },
        categories: {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: Sizes.mr_20,
          height: Sizes.h_25,
          marginHorizontal: Sizes.mr_4,
          paddingHorizontal: Sizes.pd_8,
          borderWidth: 1,
          borderColor:colors.ButtonGray,
          borderRadius: Sizes.rd_8,
        },
        caregoryText: {
          fontSize: Sizes.font_10,
        },
      }),
    [],
  );

  const renderFlatlistItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.categories} activeOpacity={0.5}>
        <Text style={styles.caregoryText}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        backArrow={true}
        heart={true}
        title="My Wishlist"
        bag={true}
        search={true}
      />
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderFlatlistItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      
    </SafeAreaView>
  );
};

export default WishlistScreen;
