import { Button, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import { useLanguage } from '../../locales/useLanguage';
import Header from '@global/Header';
import BanerSlider from '@global/BanerSlider';
import { rh, rpm, rw } from '@theme/responsive';
import { imageSlider } from '@constants/imagePath';
import colors from '@theme/colors';
import CategoryHorizontalList from '../categories/components/CategoryHorizontalList';
import ProductDetails from './components/ProductDetails';
import ProductListHorizontal from '../productDetails/components/ProductList';
import ProductListCard from '../productDetails/components/ProductCard';
import products from '@data/products';
import { SCREEN_WIDTH } from '@theme/device';

const HomeScreen = () => {
  const { language, setLanguage, strings } = useLanguage();

  const imageData = imageSlider;

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang, true);
  };

  return (
    <View style={styles.container}>
      {/* Common Header */}
      <Header
        logo={true}
        search={true}
        bell={true}
        heart={true}
        bag={true}
        subHeaderStyle={styles.leftRightContainer}
      />
      <ScrollView nestedScrollEnabled>
        {/* Category */}
        <CategoryHorizontalList />

        {/* Banner Slider */}
        <BanerSlider
          imageData={imageData}
          width={SCREEN_WIDTH}
          height={rh(380)}
          buttonStyle={styles.BannerButtonStyle1}
          carouselStyle={styles.carouselStyle1}
        />

        {/* Product List  */}
        <ProductListHorizontal />

         <BanerSlider
          imageData={imageData}
          width={SCREEN_WIDTH}
          height={rh(380)}
          buttonStyle={styles.BannerButtonStyle1}
          carouselStyle={styles.carouselStyle1}
        />

        {/* <ProductListCard products={products} /> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: { height: rh(75), backgroundColor: colors.primary },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rpm(50),
    marginBottom: rpm(20),
  },
  leftRightContainer: {
    marginTop: rpm(40),
  },
  BannerButtonStyle1: {
    width: SCREEN_WIDTH,
    height: rh(405),
    marginVertical: rpm(10),
  },
  carouselStyle1: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  BannerButtonStyle2: {
    width: SCREEN_WIDTH-100,
    height: rh(210),
    marginTop: rpm(30),
  },
  carouselStyle2: {
    width: rw(200),
    height: rh(220),
    borderWidth: 1,
  },
});
