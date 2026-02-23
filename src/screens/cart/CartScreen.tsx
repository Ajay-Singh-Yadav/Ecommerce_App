import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@global/Header';
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';



const CartScreen = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex:1,
          backgroundColor: colors.white,
        },

        title: {
          fontSize: Sizes.font_16,
        },
      }),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header backArrow={true} heart={true} title='My Bag' />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
