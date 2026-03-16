import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';

import { useLanguage } from '@locales/useLanguage';

import BanerSlider from '@global/BanerSlider';
import { imageSlider, imageSlider2, imageSlider3 } from '@constants/imagePath';
import { Sizes } from '@theme/sizes';
import PinCodeHeader from '@global/PinCodeHeader';
import CategoryHorizontalList from '@screens/categories/components/CategoryHorizontalList';
import colors from '@theme/colors';
import HorizontalProductList from '@global/HorizontalProductList';
import axios from 'axios';
import {
  getShirtProducts,
  getTShirtProducts,
} from '../../api/axios/getProducts';

const HomeScreen = () => {
  const { strings } = useLanguage();

  const [products, setProducts] = useState<any[]>([]);
  const [shirts, setShirts] = useState<any[]>([]);
  const [tshirts, setTShirts] = useState<any[]>([]);

  useEffect(() => {
    getShirts();
    getTShirts();
  }, []);

  const getShirts = async () => {
    const data = await getShirtProducts();
    setShirts(data);
  };
  const getTShirts = async () => {
    const data = await getTShirtProducts();
    console.log('TShirt', data);
    setTShirts(data);
  };

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: colors.white,
        },
      }),
    [],
  );

  return (
    <ScrollView
      style={styles.container}
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
    >
      <PinCodeHeader pinCode="244901" />
      <CategoryHorizontalList />
      <BanerSlider imageData={imageSlider2} />

      <HorizontalProductList products={shirts} tagline="New Arrivals" />

      <BanerSlider imageData={imageSlider} />

      <HorizontalProductList products={tshirts} tagline="Indieverse" />

      <View>
        <Text style={{ color: colors.black }}>{strings.TAGLINE_1}</Text>
        <Text style={{ color: colors.black, marginBottom: Sizes.mr_4 }}>
          {strings.TAGLINE_2}
        </Text>
        <BanerSlider imageData={imageSlider3} />
        <HorizontalProductList products={shirts} tagline="Polos" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
