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
import HorizontalProductList from '@global/HorizontalProductList';
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fechProducts = async () => {
      const res = await getProducts();
      setProducts(res);
      console.log("Products:", res);
    };

    fechProducts();
  }, []);

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

      <HorizontalProductList products={products} />
      <BanerSlider imageData={imageSlider} />

      <HorizontalProductList products={products} />

      <View>
        <Text style={{ color: colors.black, }}>{strings.TAGLINE_1}</Text>
        <Text style={{ color: colors.black, marginBottom: Sizes.mr_4 }}>{strings.TAGLINE_2}</Text>
        <BanerSlider imageData={imageSlider3} />
      </View>
      <HorizontalProductList products={products} />
    </ScrollView>
  );
};

export default HomeScreen;
