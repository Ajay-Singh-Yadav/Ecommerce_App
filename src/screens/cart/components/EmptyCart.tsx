import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import EmptyBag from '@assets/svg/EmptyBag.svg';
import { Sizes } from '@theme/sizes';
import Line from '@global/Line';
import colors from '@theme/colors';
import MyWishlist from './MyWishlist';
import { getShirtProducts } from '../../../api/axios/getProducts';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '@navigation/navigationStrings';
import { useLanguage } from '@locales/useLanguage';

const EmptyCart = () => {
  const navigation = useNavigation<any>();
  const { strings } = useLanguage();

  const [shirts, setShirts] = useState<any[]>([]);
  const [showWishlist, setShowWishlist] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWishlist(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shirts.length === 0) {
      getShirts();
    }
  }, []);

  const getShirts = async () => {
    const data = await getShirtProducts();
    setShirts(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <EmptyBag width={Sizes.w_200} height={Sizes.h_200} />

        <Text style={styles.punchLine}>{strings.EMPTYPUNCHLINE_1}</Text>

        <Text style={styles.punchLine2}>{strings.EMPTYPUNCHLINE_2}</Text>

        <TouchableOpacity
          style={styles.startShopping}
          onPress={() =>
            navigation.navigate(navigationStrings.DRAWER, {
              screen: navigationStrings.BOTTOM_TABS,
              params: {
                screen: navigationStrings.HOME_STACK,
              },
            })
          }
        >
          <Text style={styles.startShoppingText}>{strings.START_SHOPPING}</Text>
        </TouchableOpacity>
      </View>

      <Line style={styles.LineStyle} bgColor={colors.LineColorGray} />

      <View style={styles.bottomSection}>
        {showWishlist && <MyWishlist products={shirts} tagline="My Wishlist" />}
      </View>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSection: {
    height: '50%',
    marginTop: Sizes.mr_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    width: '100%',
  },

  punchLine: {
    fontSize: Sizes.font_20,
    fontWeight: '500',
    marginTop: Sizes.mr_20,
  },
  punchLine2: {
    color: colors.ArsenicBlack,
    marginTop: Sizes.mr_8,
    textAlign: 'center',
    paddingHorizontal: Sizes.pd_40,
  },
  startShopping: {
    marginTop: Sizes.mr_30,
    backgroundColor: colors.primary,
    paddingHorizontal: Sizes.mr_60,
    paddingVertical: Sizes.pd_12,
    borderRadius: Sizes.rd_8,
  },
  startShoppingText: {
    color: colors.ArsenicBlack,
    fontSize: Sizes.font_12,
    fontWeight: '600',
  },
  LineStyle: {
    width: '100%',
    height: Sizes.h_5,
  },
});
