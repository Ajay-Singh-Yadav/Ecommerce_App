import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '@locales/useLanguage';
import { getProducts } from '../../api/axios/getProducts';
import HorizontalProductList from '@screens/productDetails/components/HorizontalProductList';
import BanerSlider from '@global/BanerSlider';
import { Dimensions } from 'react-native';
import { imageSlider } from '@constants/imagePath';
import { Sizes } from '@theme/sizes';
import LogoLoader from '@global/LogoLoader';

const HomeScreen = () => {
  const { strings } = useLanguage();
  // const { width } = Dimensions.get('window').width;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fechProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res);
        console.log(res);
      } catch (e) {
        console.log('API ERROR:', e);
      }
    };
    fechProducts();
  }, []);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          marginTop: Sizes.mr_10,
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
      <BanerSlider imageData={imageSlider} />
      <HorizontalProductList products={products} />
      <BanerSlider
      
        width={Sizes.w_420}
        height={Sizes.h_300}
        imageData={imageSlider}
      />
   
   <HorizontalProductList products={products} />
      <BanerSlider
        width={Sizes.w_420}
        height={Sizes.h_500}
        imageData={imageSlider}
      />
    </ScrollView>
  );
};

export default HomeScreen;
