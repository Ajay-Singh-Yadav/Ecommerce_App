import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';


import products from '@data/products'; 
import { br, rh, rpm, rs, rw } from '@theme/responsive';
import colors from '@theme/colors';
import { pixelRatio } from '@theme/device';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 2.5;
const ITEM_HEIGHT = ITEM_WIDTH + 80;

const ProductListHorizontal = () => {
  const renderStars = (rating: number) => {
    const fullStar = '★';
    const emptyStar = '☆';
    return (
      <Text style={styles.rating}>
        {fullStar.repeat(Math.floor(rating))}
        {emptyStar.repeat(5 - Math.floor(rating))}
      </Text>
    );
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
      <View style={{ width: rw(140), height: rh(150) }}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>

      <Text style={styles.brand}>{item.brand}</Text>
      <Text style={styles.name} numberOfLines={2}>
        {item.shortDescription}
      </Text>

      <Text style={styles.price}>{item.offer}</Text>

      {renderStars(item.rating)}
      <Text style={styles.reviews}>{item.totalReview} reviews</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  );
};

export default ProductListHorizontal;

const styles = StyleSheet.create({
  container: {
    marginVertical: rpm(5),
  },
  itemContainer: {
    width: rw(140),
    height: rh(210),
    marginHorizontal: rpm(5),
    borderWidth: 1 / pixelRatio,
    overflow: 'hidden',
    borderColor: colors.neutral_200,
    borderRadius: br(5),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  brand: {
    fontSize: rs(10),
    color: '#888',
    fontWeight: '600',
  },
  name: {
    fontSize: rs(8),
  },
  price: {
    fontSize: rs(8),
    color: '#e60023',
  },
  rating: {
    fontSize: 12,
    color: '#f0a500',
  },
  reviews: {
    fontSize: rs(10),
    color: '#999',
  },
});
