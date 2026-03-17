import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RightArrow from '@assets/svg/RightArrow.svg';
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';

const CartItemCard = () => (
  <View style={styles.card}>
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={{
          uri: 'https://images.bewakoof.com/t320/men-s-blue-slim-straight-fit-stretchable-mid-rise-jeans-662624-1751015324-1.jpg',
        }}
        style={styles.productImage}
      />

      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.brand}>Bewakoof®</Text>
        <Text style={styles.title}>Men's White T-shirt</Text>

        <Text style={styles.delivery}>Get it in <Text style={{color:colors.OvlibeGreen, fontWeight:'900'}}>2 days</Text></Text>

        <View style={styles.rowBetween}>
          <Text style={styles.price}>₹4,495</Text>
          <Text style={styles.oldPrice}>₹10,989</Text>
        </View>

        <Text style={styles.saving}>You saved ₹6,494</Text>
      </View>

      <TouchableOpacity>
        <Text style={{ fontSize: 18 }}>✕</Text>
      </TouchableOpacity>
    </View>

    {/* SIZE + QTY */}
    <View style={styles.row}>
      <TouchableOpacity style={styles.selectSizeButton}>
        <Text style={styles.selectSize}>Size: L </Text>
        <RightArrow
          width={Sizes.w_12}
          height={Sizes.font_12}
          style={{ transform: [{ rotate: '90deg' }] }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectSizeButton}>
        <Text style={styles.selectSize}>Qty: 1 </Text>
        <RightArrow
          width={Sizes.w_12}
          height={Sizes.font_12}
          style={{ transform: [{ rotate: '90deg' }] }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default CartItemCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  card: {
    margin: Sizes.mr_10,
    padding: Sizes.pd_10,
    borderRadius: Sizes.rd_8,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },

  productImage: {
    width: Sizes.w_90,
    height: Sizes.h_110,
    borderRadius: Sizes.rd_4,
  },

  brand: { fontSize: Sizes.font_12, fontWeight: '600' },
  title: { fontSize: Sizes.font_11, color: colors.TextGray90 },
  delivery: {
    fontSize: Sizes.font_11,
    color: colors.TextGray98,
   
    marginVertical: Sizes.mr_5,
  },

  price: { fontWeight: '700' },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
  },

  saving: { color: colors.saveGreen, fontSize: Sizes.font_10 },

  row: {
    flexDirection: 'row',
    gap: Sizes.gap_10,
    marginTop: Sizes.mr_10,
  },

  selectSizeButton: {
    height: Sizes.h_24,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Sizes.pd_2,
    borderRadius: Sizes.rd_4,
    backgroundColor: '#F4F8FB',
  },
  selectSize: {
    color: '#1C6C9E',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Sizes.mr_2,
  },
});
