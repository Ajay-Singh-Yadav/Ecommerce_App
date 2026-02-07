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

// Dummy heart icon using Unicode — replace with your SVG or Icon component
const HeartIcon = ({ filled = false }) => (
  <Text style={{ fontSize: 18, color: filled ? 'red' : '#999' }}>
    {filled ? '❤️' : '🤍'}
  </Text>
);

// Star icon with rating number
const StarRating = ({ rating }: { rating: number }) => (
  <View style={styles.starContainer}>
    <Text style={styles.star}>⭐</Text>
    <Text style={styles.starText}>{rating.toFixed(1)}</Text>
  </View>
);

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.6;
const CARD_HEIGHT = CARD_WIDTH * 1.3;

const ProductListCard = ({ products }: { products: any[] }) => {
  const renderItem = ({ item }: any) => {

    const priceMatch = item.offer.match(/₹(\d+)/);
    const price = priceMatch ? priceMatch[1] : '';
    const originalPriceMatch = item.offer.match(/₹(\d+)/g);
    const originalPrice =
      originalPriceMatch && originalPriceMatch.length > 1
        ? originalPriceMatch[1]
        : '';

    // Extract discount percentage from offer string (if any)
    const discountMatch = item.offer.match(/(\d+)% OFF/);
    const discount = discountMatch ? discountMatch[1] + '% OFF' : '';

    return (
      <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        <View>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="cover"
          />
          <StarRating rating={item.rating} />
          <TouchableOpacity style={styles.wishlistIcon} activeOpacity={0.7}>
            <HeartIcon />
          </TouchableOpacity>
        </View>

        <Text style={styles.brand}>{item.brand}</Text>

        <Text style={styles.description} numberOfLines={2}>
          {item.shortDescription}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{price}</Text>
          {originalPrice ? (
            <Text style={styles.originalPrice}>₹{originalPrice}</Text>
          ) : null}
          {discount ? (
            <Text style={styles.discount}>{discount}</Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={products}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
    />
  );
};

export default ProductListCard;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: CARD_HEIGHT * 0.65,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  starContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  star: {
    fontSize: 14,
    color: '#f5a623',
    marginRight: 4,
  },
  starText: {
    fontWeight: '600',
    fontSize: 13,
  },
  wishlistIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  brand: {
    marginTop: 8,
    marginHorizontal: 12,
    fontWeight: '700',
    fontSize: 14,
  },
  description: {
    marginTop: 4,
    marginHorizontal: 12,
    color: '#555',
    fontSize: 13,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginHorizontal: 12,
  },
  price: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
  },
  originalPrice: {
    fontSize: 13,
    color: '#888',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  discount: {
    marginLeft: 8,
    fontSize: 13,
    color: '#3cb371', // green color
    fontWeight: '600',
  },
});
