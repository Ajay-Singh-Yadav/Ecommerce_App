import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';

const BottomBar = () => (
  <View style={styles.bottomBar}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.OvlibeGreen,
        borderTopLeftRadius: Sizes.rd_10,
        borderTopRightRadius: Sizes.rd_10,
        padding: Sizes.pd_2,
        borderWidth: 1,
      }}
    >
      {' '}
      <View
        
        style={styles.gif}
      >
        <Text style={{ color: colors.white }}>% </Text>
      </View>
      <Text style={{ color: colors.white }}>You save on this order 1900</Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        padding: Sizes.pd_14,
        justifyContent: 'space-between',
      }}
    >
      <View style={styles.priceContainer}>
        <Text style={styles.total}>₹4495</Text>
        <Text style={styles.viewDetails}>VIEW DETAILS</Text>
      </View>

      <TouchableOpacity style={styles.proceedBtn}>
        <Text style={styles.proceedText}>PROCEED</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gif: {
    alignItems:'center',
    justifyContent:'center',
    width: Sizes.w_20,
    height: Sizes.h_20,
    borderRadius:Sizes.rd_20,
    borderWidth: 1,
  },

  bottomBar: {
    position: 'absolute',
    bottom: Sizes.mr_14,
    width: '100%',

    borderTopLeftRadius: Sizes.rd_10,
    borderTopRightRadius: Sizes.rd_10,
    backgroundColor: colors.white,
  },
  priceContainer: {
    marginHorizontal: Sizes.mr_10,
  },

  total: { fontWeight: '700', fontSize: Sizes.font_14 },

  viewDetails: { color: colors.SteelBlue, fontSize: Sizes.font_11 },

  proceedBtn: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: Sizes.pd_30,
    justifyContent: 'center',
    borderRadius: Sizes.rd_6,
  },

  proceedText: {
    fontWeight: '600',
  },
});
