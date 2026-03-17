import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@global/Header';
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';
import EmptyCart from './components/EmptyCart';
import DeliverySection from './components/DeliverySection';
import CouponSection from './components/CouponSection';
import CartItemCard from './components/CartItemCard';
import PriceSummary from './components/PriceSummary';
import BottomBar from './components/BottomBar';
import Line from '@global/Line';

const CartScreen = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.white,
        },

        title: {
          fontSize: Sizes.font_16,
        },
        LineStyle: {
          width: '100%',
          height: Sizes.h_5,
        },
      }),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header backArrow={true} heart={true} title="My Bag" />
      {/* <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <EmptyCart />
        
      </ScrollView> */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <Line style={styles.LineStyle} bgColor={colors.LineColorGray} />
        <DeliverySection />
        <Line style={styles.LineStyle} bgColor={colors.LineColorGray} />
        <CouponSection />
        <Line style={styles.LineStyle} bgColor={colors.LineColorGray} />
        <CartItemCard />
        <Line style={styles.LineStyle} bgColor={colors.LineColorGray} />
        <PriceSummary />
      </ScrollView>

      <BottomBar />
    </SafeAreaView>
  );
};

export default CartScreen;
