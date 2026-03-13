import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import Header from '@global/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import { useLanguage } from '@locales/useLanguage';
import Line from '@global/Line';
import SelectSize from './components/SelectSize';

import DevliveryDetails from './components/DevliveryDetails';
import KeyHighlights from './components/KeyHighlights';
import products from '@data/DummyProducts';
import OfferList from './components/OfferList';
import ProductDescription from './components/ProductDescription';
import CommanButton from '@global/CommanButton';

import Bag from '@assets/svg/Bag.svg';
import HorizontalProductList from '@global/HorizontalProductList';

import { collection, getDocs } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../api/firebaseConfig';
import BanerSlider from '@global/BanerSlider';
import { getCollectionWithCache } from '../../api/firestoreService';
import LogoLoader from '@global/LogoLoader';

const { width, height } = Dimensions.get('window');

const ProductDetail = () => {
  const { language, strings } = useLanguage();
  const route = useRoute<any>();
  const { product, category } = route.params;

  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const [products, setProducts] = useState<any[]>([]);
  const [banner, setBanner] = useState([]);


useEffect(() => {
  if (product) {
    setLoading(false);
  }
}, [product]);

  useEffect(() => {
    loadProducts();
    fetchBanners();
  }, []);

  const loadProducts = async () => {
    await getCollectionWithCache(category, category, setProducts);
  };

  const fetchBanners = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'Banners'));

      const bannerBrand: any = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      const formattedBanners =
        bannerBrand[0]?.images?.map((img: string) => ({
          type: 'image',
          src: img,
        })) || [];

      setBanner(formattedBanners);

      console.log('Formatted Banners:', formattedBanners);
    } catch (error) {
      console.log('Error fetching Banners:', error);
    }
  };

  const renderImage = ({ item }: any) => (
    <View style={styles.imageWrapper}>
      <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />

      <View style={styles.ratingBox}>
        <Text style={styles.ratingText}>
          ⭐ {product?.rating?.average} {product?.rating?.count}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        backArrow
        heart
        search
        bag
        title={
          product?.category?.id === 'products'
            ? 'Bewakoof@'
            : product?.category?.id || ''
        }
      />

      {loading ? (
        <View style={styles.loader}>
          <LogoLoader />
        </View>
      ) : (
        <FlatList
          data={[]}
          keyExtractor={() => 'key'}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <View style={styles.sliderContainer}>
                <FlatList
                  data={product?.images}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={renderImage}
                  onMomentumScrollEnd={onScroll}
                  initialNumToRender={1}
                  maxToRenderPerBatch={2}
                  windowSize={3}
                />
              </View>

              <View style={styles.dotContainer}>
                {product?.images?.map((index: number) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      activeIndex === index && styles.activeDot,
                    ]}
                  />
                ))}
              </View>

              <View style={styles.infoContainer}>
                <Text style={styles.brand}>{product?.brand?.[language]}</Text>

                <View style={styles.textBox}>
                  <Text style={styles.title}>{product?.title?.[language]}</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.price}>₹{product?.price?.current}</Text>

                  <Text style={styles.oldPrice}>
                    ₹{product?.price?.original}
                  </Text>

                  <Text style={styles.discount}>
                    {product?.price?.discount}% OFF
                  </Text>
                </View>

                <View style={styles.fabric}>
                  <Text style={styles.fabricText}>
                    {product?.fabric?.[language]}
                  </Text>
                </View>
              </View>

              <Line style={styles.LineStyle} bgColor={colors.LineColorGray} />

              <SelectSize
                sizes={product?.sizes || []}
                onSelectSize={item => {
                  console.log('Selected:', item);
                }}
              />
              <View style={{ marginHorizontal: Sizes.mr_10 }}>
                <OfferList data={product?.offers} />
              </View>

              <Line style={styles.LineStyle} bgColor={colors.LineColorGray} />

              <DevliveryDetails />

              <KeyHighlights data={product?.highlights} language={language} />

              <ProductDescription
                description={product?.description}
                returnPolicy={product?.returnPolicy}
              />

              <Line style={styles.LineStyle} bgColor={colors.LineColorGray} />

              <CommanButton
                ButtonText={`${strings.ADD_TO_BAG} ${product?.price?.currency}${product?.price?.current}`}
                StyleText={styles.addToCartText}
                styleButton={styles.addToCartButton}
                Icon={<Bag width={Sizes.w_18} height={Sizes.h_18} />}
              />

              <HorizontalProductList
                products={products}
                tagline={strings.FREQUENTLY_BOUGHT}
              />

              <Text
                style={{
                  marginHorizontal: Sizes.mr_12,
                  marginVertical: Sizes.mr_12,
                  fontWeight: '500',
                  color: colors.ArsenicBlack,
                }}
              >
                {strings.MORE_FROM_BRAND}
              </Text>

              <BanerSlider imageData={banner} />

              <HorizontalProductList
                products={products}
                tagline={strings.YOU_MAY_LIKE}
              />
            </>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  sliderContainer: {
    height: height * 0.6,
  },

  imageWrapper: {
    width: width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  ratingBox: {
    position: 'absolute',
    bottom: Sizes.mr_15,
    left: Sizes.mr_15,
    backgroundColor: colors.white,
    paddingHorizontal: Sizes.pd_12,
    paddingVertical: Sizes.pd_2,
    borderRadius: Sizes.rd_20,
  },

  ratingText: {
    fontSize: Sizes.font_12,
    fontWeight: '500',
  },

  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: Sizes.mr_4,
  },

  dot: {
    width: Sizes.w_6,
    height: Sizes.h_6,
    borderRadius: Sizes.rd_20,
    backgroundColor: '#cccccc',
    marginHorizontal: Sizes.mr_4,
  },

  activeDot: {
    backgroundColor: colors.black,
    width: Sizes.w_7,
    height: Sizes.h_7,
  },

  infoContainer: {
    marginHorizontal: Sizes.mr_12,
  },

  brand: {
    fontSize: Sizes.font_12,
    fontWeight: '600',
  },
  textBox: {
    width: '90%',
  },

  title: {
    fontSize: Sizes.font_10,
    flexWrap: 'wrap',
    color: '#666',
    marginTop: Sizes.mr_4,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Sizes.mr_8,
  },

  price: {
    fontSize: Sizes.font_12,
    fontWeight: '700',
  },

  oldPrice: {
    fontSize: Sizes.font_12,
    marginLeft: Sizes.mr_8,
    textDecorationLine: 'line-through',
    color: '#888',
  },

  discount: {
    fontSize: Sizes.font_12,
    marginLeft: Sizes.mr_8,
    color: 'green',
    fontWeight: '600',
  },
  fabric: {
    width: Sizes.w_70,
    alignItems: 'center',
    backgroundColor: '#FAFAFC',
    borderRadius: Sizes.rd_4,
    borderColor: colors.SlateGrayText,
    borderWidth: 0.5,
    marginTop: Sizes.mr_8,
  },
  fabricText: {
    fontSize: Sizes.font_10,
    color: colors.SlateGrayText,
  },
  LineStyle: {
    width: '100%',
    height: Sizes.h_5,
  },

  addToCartButton: {
    backgroundColor: colors.primary,
    padding: Sizes.pd_12,
    borderRadius: Sizes.rd_8,
    marginVertical: Sizes.mr_14,
    marginHorizontal: Sizes.mr_12,
  },
  addToCartText: {
    fontSize: Sizes.font_12,
    marginHorizontal: Sizes.mr_4,
  },
});
