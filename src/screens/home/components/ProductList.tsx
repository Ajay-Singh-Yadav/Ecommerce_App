import {
  FlatList,
  I18nManager,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { products } from '../../../data/products';
import { useLanguage } from '@locales/useLanguage';
import colors from '@theme/colors';
import { br, rpm, rh, rw } from '@theme/responsive';
import { Radius, Spacing } from '@theme/sizes';
import { pixelRatio } from '@theme/device';

export const isRTL = I18nManager.isRTL;

const ProductList = () => {
  const { strings, language } = useLanguage();

  const renderItem = ({ item }: any) => {
    const discountedPrice = item.price - (item.price * item.discount) / 100;

    const name = isRTL ? item.name.ar : item.name.en;

    return (
      <View style={styles.card}>
        <View style={styles.cardImgContainer}>
          <Image source={{ uri: item.images[0] }} style={styles.image} />
        </View>

        <View style={styles.cartTXTContainer}>
          <Text style={styles.name}>
            {strings.FULL_NAME}:{name}
          </Text>

          <Text style={styles.price}>
            ${discountedPrice.toFixed(2)}{' '}
            <Text style={styles.oldPrice}>${item.price}</Text>
          </Text>

          <Text style={styles.discount}>{item.discount}% OFF</Text>

          <Text style={styles.rating}>⭐ {item.rating}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={products}
      horizontal={false}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentStyle}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  card: {
    width: rw(320),
    height: rh(250),
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: br(Radius.xs),
    marginHorizontal: rpm(Spacing.sm),
    marginVertical: rpm(Spacing.md),
    borderWidth: 1 / pixelRatio,
    borderColor: colors.borderGrey,
    elevation: 10,
  },
  contentStyle: {
    marginVertical: rpm(Spacing.sm),
  },
  cardImgContainer: {
    width: rw(280),
    height: rh(140),
    marginTop: rpm(Spacing.md),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: br(Spacing.xs),
  },
  cartTXTContainer: {
    width: rw(300),
    backgroundColor: colors.gray,
    marginVertical: rpm(Spacing.md),

  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'auto',
  },
  brand: {
    color: '#666',
    textAlign: 'auto',
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 14,
  },
  discount: {
    color: 'green',
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 4,
  },
  category: {
    color: '#444',
    textAlign: 'auto',
  },
  delivery: {
    textAlign: 'auto',
  },
});
