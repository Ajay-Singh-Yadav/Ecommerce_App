import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useLanguage } from '@locales/useLanguage';

import BanerSlider from '@global/BanerSlider';
import { imageSlider, imageSlider2, imageSlider3 } from '@constants/imagePath';
import { Sizes } from '@theme/sizes';
import PinCodeHeader from '@global/PinCodeHeader';
import CategoryHorizontalList from '@screens/categories/components/CategoryHorizontalList';
import colors from '@theme/colors';
import { collection, getDocs } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../api/firebaseConfig';
import HorizontalProductList from '@global/HorizontalProductList';
// import HorizontalProductList from '@screens/productDetails/components/HorizontalProductList';

const HomeScreen = () => {
  const { strings } = useLanguage();

  const [products, setProducts] = useState([]);

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
    console.log(products, 'Prodducts');
  }, []);

  const loadProducts = async () => {
    try {
      const cachedProducts = await AsyncStorage.getItem('products');

      if (cachedProducts) {
        console.log('Loaded from cache');
        setProducts(JSON.parse(cachedProducts));
        return;
      }

      await fetchProducts();
    } catch (error) {
      console.log('Error loading products:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'products'));

      const productList: any = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      await AsyncStorage.setItem('products', JSON.stringify(productList));
      setProducts(productList);
      console.log('Fetched Products:', productList);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
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

      <HorizontalProductList products={products} />
      <BanerSlider imageData={imageSlider} />

      <HorizontalProductList products={products} />

      <View>
        <Text style={{ color: colors.black }}>{strings.TAGLINE_1}</Text>
        <Text style={{ color: colors.black, marginBottom: Sizes.mr_4 }}>
          {strings.TAGLINE_2}
        </Text>
        <BanerSlider imageData={imageSlider3} />
        <HorizontalProductList products={products} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
