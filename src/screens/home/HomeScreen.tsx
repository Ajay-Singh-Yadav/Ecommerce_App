import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';

import { useLanguage } from '@locales/useLanguage';

import BanerSlider from '@global/BanerSlider';
import { imageSlider, imageSlider2, imageSlider3 } from '@constants/imagePath';
import { Sizes } from '@theme/sizes';
import PinCodeHeader from '@global/PinCodeHeader';
import CategoryHorizontalList from '@screens/categories/components/CategoryHorizontalList';
import colors from '@theme/colors';
import { collection, getDocs } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { addShirts, db } from '../../api/firebaseConfig';
// import { addProduct, db } from '../../api/firebaseConfig';
import HorizontalProductList from '@global/HorizontalProductList';
import { getCollectionWithCache } from '../../api/firestoreService';

const HomeScreen = () => {
  const { strings } = useLanguage();

  const [products, setProducts] = useState<any[]>([]);
  const [shirts, setShirts] = useState<any[]>([]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: colors.white,
        },
      }),
    [],
  );
  useEffect(() => {
    loadProducts();
    
  }, []);

  const loadProducts = async () => {
    await getCollectionWithCache('products', 'products', setProducts);
    await getCollectionWithCache('Shirts', 'Shirts', setShirts);
  };

  return (
    <ScrollView
      style={styles.container}
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
    >
      <PinCodeHeader pinCode="244901" />
      <CategoryHorizontalList />
      <BanerSlider imageData={imageSlider2} />

      <HorizontalProductList products={products} tagline="New Arrivals" />

      <BanerSlider imageData={imageSlider} />

      <HorizontalProductList products={products} tagline="Indieverse" />

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
