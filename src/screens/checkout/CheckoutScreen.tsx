import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import LeftArrow from '@assets/svg/LeftArrow.svg';
import MenuIcon from '@assets/svg/MenuIcon.svg';
import DownArrow from '@assets/svg/DownArrow.svg';
import VisaCard from '@assets/svg/VisaCard.svg';
import Menu from '@assets/svg/Menu.svg'; // three dot icon

import colors from '@theme/colors';
import { rw, rh, rs, br, rpm } from '@theme/responsive';
import { decreaseQty, increaseQty, maxQty } from '@utils/utilityFunctions';

const CartItem = ({ item, increaseQty, decreaseQty, qty }: any) => {
  return (
    <View style={styles.itemRow}>
      <Image source={{ uri: item.thumbnail }} style={styles.productImg} />

      <View style={{ flex: 1 }}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSub}>{item.brand}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>

      <View style={styles.qtyBox}>
        <TouchableOpacity style={styles.qtyBtn} onPress={decreaseQty}>
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.qtyValue}>{qty}</Text>

        <TouchableOpacity style={styles.qtyBtn} onPress={increaseQty}>
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CheckoutScreen = ({ navigation, route }: any) => {
  const { product } = route.params;

  const [qty, setQty] = useState(1);

  const handleIncrease = () => {
    setQty(prev => {
      const nextQty = increaseQty(prev, maxQty);

      if (nextQty === prev) {
        Alert.alert('Maximum quantity reached');
        return prev;
      }
      return nextQty;
    });
  };

  const handleDecrease = () => {
    setQty(prev => decreaseQty(prev));
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow width={rw(22)} height={rw(22)} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Checkout</Text>

        <TouchableOpacity>
          <MenuIcon width={rw(22)} height={rw(22)} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* CART ITEM */}
        <CartItem
          item={product}
          increaseQty={handleIncrease}
          decreaseQty={handleDecrease}
          qty={qty}
        />

        {/* SHIPPING INFO */}
        <Text style={styles.sectionTitle}>Shipping Information</Text>

        <TouchableOpacity style={styles.cardBox}>
          <VisaCard width={rw(36)} height={rw(24)} />
          <Text style={styles.cardText}>**** **** **** 2143</Text>
          <DownArrow width={rw(18)} height={rw(18)} />
        </TouchableOpacity>

        {/* PRICE SUMMARY */}
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total (9 items)</Text>
          <Text style={styles.summaryValue}>$1,014.95</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping Fee</Text>
          <Text style={styles.summaryValue}>$0.00</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Discount</Text>
          <Text style={styles.summaryValue}>$0.00</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.summaryRow}>
          <Text style={styles.subTotalLabel}>Sub Total</Text>
          <Text style={styles.subTotalValue}>$1,014.95</Text>
        </View>
      </ScrollView>

      {/* PAY BUTTON */}
      <TouchableOpacity style={styles.payBtn}>
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
    paddingHorizontal: rpm(16),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: rpm(10),
  },

  headerTitle: {
    fontSize: rs(18),
    fontWeight: '600',
    color: colors.dark,
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rpm(18),
  },

  productImg: {
    width: rw(70),
    height: rw(70),
    borderRadius: br(14),
    marginRight: rpm(12),
  },

  itemTitle: {
    fontSize: rs(14),
    fontWeight: '600',
    color: colors.dark,
  },

  itemSub: {
    fontSize: rs(12),
    color: colors.secondary,
    marginTop: rpm(2),
  },

  itemPrice: {
    fontSize: rs(14),
    fontWeight: '600',
    marginTop: rpm(6),
  },

  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: rpm(10),
  },

  qtyBtn: {
    width: rw(26),
    height: rw(26),
    borderRadius: br(13),
    borderWidth: 1,
    borderColor: colors.muted,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyText: {
    fontSize: rs(14),
  },

  qtyValue: {
    marginHorizontal: rpm(8),
    fontSize: rs(14),
  },

  sectionTitle: {
    fontSize: rs(16),
    fontWeight: '600',
    marginTop: rpm(28),
  },

  cardBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background2,
    padding: rpm(14),
    borderRadius: br(16),
    marginTop: rpm(12),
  },

  cardText: {
    flex: 1,
    marginLeft: rpm(12),
    fontSize: rs(14),
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: rpm(14),
  },

  summaryLabel: {
    fontSize: rs(14),
    color: colors.secondary,
  },

  summaryValue: {
    fontSize: rs(14),
  },

  divider: {
    height: 1,
    backgroundColor: colors.muted,
    marginVertical: rpm(18),
  },

  subTotalLabel: {
    fontSize: rs(16),
    fontWeight: '600',
  },

  subTotalValue: {
    fontSize: rs(16),
    fontWeight: '700',
  },

  payBtn: {
    backgroundColor: colors.dark,
    paddingVertical: rpm(16),
    borderRadius: br(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: rpm(10),
  },

  payText: {
    color: '#fff',
    fontSize: rs(16),
    fontWeight: '600',
  },
});
