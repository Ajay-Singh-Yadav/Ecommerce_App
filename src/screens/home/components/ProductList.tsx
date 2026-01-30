import {
  FlatList,
  I18nManager,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { products } from '../../../data/products';
import { useLanguage } from '../../../locales/useLanguage';

export const isRTL = I18nManager.isRTL;

const ProductList = () => {
  const { strings, language } = useLanguage();

  const renderItem = ({ item }: any) => {
    const discountedPrice = item.price - (item.price * item.discount) / 100;

    const name = isRTL ? item.name.ar : item.name.en;

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.images[0] }} style={styles.image} />

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
    );
  };

  return (
    <FlatList
      data={products}
      horizontal
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ marginHorizontal: 20 }}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
    height: 400,
    margin: 20,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
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
