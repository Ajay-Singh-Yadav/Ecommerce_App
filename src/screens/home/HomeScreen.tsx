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
import { imageSlider, imageSlider2, imageSlider3 } from '@constants/imagePath';
import { Sizes } from '@theme/sizes';
import LogoLoader from '@global/LogoLoader';
import PinCodeHeader from '@global/PinCodeHeader';
import CategoryScreen from '@screens/categories/CategoryScreen';
import CategoryHorizontalList from '@screens/categories/components/CategoryHorizontalList';
import colors from '@theme/colors';

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
          // marginTop: Sizes.mr_10,
          backgroundColor:colors.white
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


      <PinCodeHeader  pinCode='244901'/>
          <CategoryHorizontalList  />
      <BanerSlider imageData={imageSlider2} />

      <HorizontalProductList products={products} />
      <BanerSlider imageData={imageSlider} />

      <HorizontalProductList products={products} />
      
      <BanerSlider imageData={imageSlider3}  />
    </ScrollView>
  );
};

export default HomeScreen;
