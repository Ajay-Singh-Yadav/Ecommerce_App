import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@theme/colors';


import LeftArrow from '@assets/svg/LeftArrow.svg';
import Heart from '@assets/svg/Heart.svg';
import Star from '@assets/svg/Star.svg';
import Cart from '@assets/svg/Cart.svg';

export default function ProductDetailScreen({ route, navigation }: any) {
  const { product } = route.params;

  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('#000');

  const sizes = ['S', 'M', 'L', 'XL'];
  const colorsList = ['#8B8B8B', '#4A4A4A', '#000000'];

const increaseQty = () => setQty(qty + 1);

const decreaseQty = () => {
  if (qty > 1) setQty(qty - 1);
};
const price = Number(product?.price || 0);
const totalPrice = qty * price;

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow width={22} height={22} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Heart width={22} height={22} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* IMAGE */}
        <Image source={{ uri: product.thumbnail }} style={styles.image} />

        {/* TITLE */}
        <Text style={styles.title}>{product.title}</Text>

        {/* RATING */}
        <View style={styles.ratingRow}>
          <Star width={16} height={16} />
          <Text style={styles.ratingText}>5.0 (7,932 reviews)</Text>

          {/* QTY */}
          <View style={styles.qtyBox}>
            <TouchableOpacity onPress={decreaseQty}>
              <Text style={styles.qtyBtn}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyValue}>{qty}</Text>

            <TouchableOpacity onPress={increaseQty}>
              <Text style={styles.qtyBtn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* DESCRIPTION */}
        <Text style={styles.desc}>{product.description}</Text>

        {/* SIZE */}
        <View style={styles.optionHeader}>
          <Text style={styles.optionTitle}>Choose Size</Text>
        </View>

        <View style={styles.row}>
          {sizes.map(size => (
            <TouchableOpacity
              key={size}
              onPress={() => setSelectedSize(size)}
              style={[
                styles.sizeCircle,
                selectedSize === size && styles.activeSize,
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.activeSizeText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* COLOR */}
        <View style={styles.optionHeader}>
          <Text style={styles.optionTitle}>Color</Text>
        </View>

        <View style={styles.row}>
          {colorsList.map(color => (
            <TouchableOpacity
              key={color}
              onPress={() => setSelectedColor(color)}
              style={[
                styles.colorCircle,
                { backgroundColor: color },
                selectedColor === color && styles.activeColor,
              ]}
            />
          ))}
        </View>
      </ScrollView>

      {/* ADD TO CART */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.cartBtn}>
          <Cart width={18} height={18} />

          <Text style={styles.cartText}>
            Add to Cart | ${totalPrice.toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },

  image: {
    height: 320,
    borderRadius: 22,
    marginHorizontal: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 14,
    marginHorizontal: 12,
    color: colors.dark,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 8,
  },

  ratingText: {
    marginLeft: 6,
    color: colors.secondary,
    flex: 1,
  },

  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 10,
  },

  qtyBtn: {
    fontSize: 18,
    width: 26,
    textAlign: 'center',
    color: colors.dark,
  },

  qtyValue: {
    fontSize: 16,
    marginHorizontal: 6,
  },

  desc: {
    margin: 12,
    color: colors.secondary,
    lineHeight: 22,
  },

  optionHeader: {
    marginHorizontal: 12,
    marginTop: 14,
  },

  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
  },

  row: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 8,
  },

  sizeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  activeSize: {
    backgroundColor: colors.dark,
  },

  sizeText: {
    color: colors.dark,
  },

  activeSizeText: {
    color: '#fff',
  },

  colorCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },

  activeColor: {
    borderWidth: 2,
    borderColor: colors.dark,
  },

  bottomBar: {
    padding: 12,
  },

  cartBtn: {
    flexDirection: 'row',
    backgroundColor: colors.dark,
    padding: 16,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
  },
});
