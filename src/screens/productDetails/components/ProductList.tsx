import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//SVG
import HeartIcon from '@assets/svg/HeartIcon.svg';
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

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: rpm(5),
        }}
      >
        <View style={{ gap: rpm(3), marginTop: rpm(4), width: '85%' }}>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {item.shortDescription}
          </Text>
          <Text style={{ fontSize: rs(10) }}>
            ₹999{' '}
            <Text
              style={{
                textDecorationLine: 'line-through',
                fontSize: rs(9),
                color: colors.TextGray,
              }}
            >
              ₹1499
            </Text>
          </Text>
          <Text style={{ color: colors.GreenOff, fontSize: rs(10) }}>
            {item.offer}
          </Text>
        </View>
        <TouchableOpacity>
          <HeartIcon width={rw(12)} height={rh(12)} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* LinearGradient Color with button */}
      <LinearGradient
        colors={['#FBF6E8', '#FFFFFF']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          height: 50,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: rs(14), marginHorizontal: 15 }}>
          New Season shirts
        </Text>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 15,
          }}
        >
          <Text style={{ fontSize: rs(14), color: '#42A2A2' }}>
            Explore All
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* Product Horizontal List  */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        style={{ marginVertical: 50 }}
      />

      {/* BOTTOM LinearGradient Color  */}
      <LinearGradient
        colors={['#FBF6E8', '#FFFFFF']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.2, y: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 0,
          height: 50,
          width: '100%',
        }}
      />
    </View>
  );
};

export default ProductListHorizontal;

const styles = StyleSheet.create({
  container: {
    marginVertical: rpm(1),

    backgroundColor: '#FFFFFF',
  },
  itemContainer: {
    width: rw(140),
    height: rh(210),
    marginHorizontal: rpm(5),
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: colors.neutral_200,
    borderRadius: br(5),
    // marginVertical: 90,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  brand: {
    fontSize: rs(12),
    color: colors.neutral_700,
    fontWeight: '600',
  },
  name: {
    fontSize: rs(10),
    color: colors.TextGray,
  },
  price: {
    fontSize: rs(8),
    color: colors.neutral_700,
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
