import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@global/Header';
import LogoLoader from '@global/LogoLoader';
import colors from '@theme/colors';

import { useLanguage } from '@locales/useLanguage';
import { Text } from 'react-native';
import { Sizes } from '@theme/sizes';
import { useNavigation, useRoute } from '@react-navigation/native';
import Offer from '@assets/svg/Offer.svg';
import ProductListBanner from './components/ProductlistBanner';
import navigationStrings from '@navigation/navigationStrings';
import {
  getAllProducts,
  getCategoryProducts,
} from '../../api/axios/getProducts';

const ProductListingScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { categoryName } = route.params || {};
  const { language, strings } = useLanguage();
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState<any[]>([]);
  console.log('Productss', products);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      setLoading(true);

      if (categoryName?.toLowerCase() === 'shop now') {
        const data = await getAllProducts();

        const shuffled = (data?.products || []).sort(() => 0.5 - Math.random());

        setProducts(shuffled);
      } else {
        const data = await getCategoryProducts(categoryName);

        setProducts(data?.products || []);
      }
    } catch (e) {
      console.log('Products error', e);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate(navigationStrings.PRODUCT_DETAILS, {
            product: item,
            // category:category
          })
        }
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.images?.[0] }}
            style={styles.productImage}
          />
        </View>

        <Text numberOfLines={1} style={styles.brand}>
          {item.brand?.[language]}
        </Text>

        <Text numberOfLines={1} style={styles.productName}>
          {item.title?.[language]}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>
            {item.price?.currency}
            {item.price?.current}
          </Text>

          <Text style={styles.oldPrice}>
            {item.price?.currency}
            {item.price?.original}
          </Text>

          <Text style={styles.discount}>{item.price?.discount}% OFF</Text>
        </View>

        {categoryName === 'products' && item.offers?.length > 0 && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: Sizes.gap_4,
            }}
          >
            <Offer width={Sizes.w_12} height={Sizes.h_12} />
            <Text style={styles.offerText}>
              {item.offers[0]?.title?.[language]}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        backArrow
        heart
        search
        bag
        title={categoryName === 'products' ? 'T-Shirts' : categoryName}
      />

      {loading ? (
        <View style={styles.loader}>
          <LogoLoader />
        </View>
      ) : (
        <FlatList
          data={products || []}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{flexGrow:1, paddingBottom: Sizes.pd_30 }}
          ListHeaderComponent={
            <ProductListBanner title={strings.FREE_SHIPPING_ON} />
          }
          ListEmptyComponent={
            !loading ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                  No products available in this category
                </Text>
              </View>
            ) : null
          }
        />
      )}
    </SafeAreaView>
  );
};

export default ProductListingScreen;

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

  card: {
    flex: 1,
    margin: Sizes.gap_8,
  },
  imageBannerContainer: {
    position: 'relative',
  },
  BannerImage: {
    width: '100%',
    height: Sizes.h_280,
    borderRadius: Sizes.rd_6,
  },
  headertContainer: {
    flexDirection: 'row',
    height: Sizes.h_38,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.SteelBlue,
    gap: Sizes.gap_8,
    marginBottom: Sizes.mr_10,
  },
  headerText: {
    fontSize: Sizes.font_12,
    color: colors.white,
  },

  imageContainer: {
    position: 'relative',
  },

  productImage: {
    width: '100%',
    height: Sizes.h_280,
    borderRadius: Sizes.rd_6,
  },

  brand: {
    color: colors.black96,
    fontSize: Sizes.font_10,
    fontWeight: '600',
    marginTop: Sizes.mr_6,
  },

  productName: {
    fontSize: Sizes.font_8,
    color: colors.textlightGray,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Sizes.mr_4,
  },

  price: {
    fontWeight: 'bold',
    fontSize: Sizes.font_10,
  },

  oldPrice: {
    fontSize: Sizes.font_10,
    textDecorationLine: 'line-through',
    marginLeft: Sizes.mr_6,
    color: colors.distColor,
  },

  discount: {
    marginLeft: Sizes.mr_6,
    color: colors.buyOffer,
    fontSize: Sizes.font_10,
    fontWeight: '500',
  },

  offerText: {
    color: colors.buyOffer,
    fontSize: Sizes.font_8,
    fontWeight: '500',
  },

  boughtText: {
    fontSize: Sizes.font_10,
    color: colors.textlightGray,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },

  emptyText: {
    fontSize: 16,
    color: '#777',
    fontWeight: '500',
  },
});
