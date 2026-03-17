import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';
import RightArrow from '@assets/svg/RightArrow.svg';

const CouponSection = () => (
  <View style={styles.wrapper}>
    {/* Floating Tag */}
    <View style={styles.offerTag}>
      <Text style={styles.offerTitle}>Best offer unloacked! 🎉</Text>
    </View>

    <View style={styles.couponBox}>
      <View style={styles.rowBetween}>
        <Text style={styles.offerText}>GETCASH10 - Cashback of Rs. 450</Text>

        <TouchableOpacity style={styles.applyRemoveButton}>
          <Text style={styles.removeBtn}>Apply</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.applyMoreBuutonContainer}>
        <TouchableOpacity style={styles.applyMoreBuuton}>
          <Text style={styles.applyMore}>Apply More Coupons</Text>
          <RightArrow width={Sizes.w_14} height={Sizes.h_14} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default CouponSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },

  wrapper: {
    marginHorizontal: Sizes.mr_12,
    marginTop: Sizes.mr_16,
  },

  offerTag: {
    position: 'absolute',
    top: -Sizes.mr_10,
    left: Sizes.mr_12,
    backgroundColor: '#FBF9FD',
    paddingHorizontal: Sizes.pd_8,
    paddingVertical: Sizes.pd_2,
    borderRadius: Sizes.rd_6,
    borderWidth: 0.6,
    borderColor: colors.offerCardBorderColor,
    zIndex: 10,
  },

  offerTitle: {
    fontSize: Sizes.font_10,
    fontWeight: '600',
    color: colors.ArsenicBlack,
  },

  couponBox: {
    height: Sizes.h_80,
    paddingTop: Sizes.pd_12,
    paddingBottom: Sizes.pd_10,
    paddingHorizontal: Sizes.pd_12,
    borderRadius: Sizes.rd_10,
    backgroundColor: colors.LightPink,
    borderWidth: 0.5,
    borderColor: colors.offerCardBorderColor,
  },
  rowBetween: {
    height: Sizes.h_40,
    padding: Sizes.pd_6,
    backgroundColor: colors.white,
    borderRadius: Sizes.rd_4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  applyRemoveButton: {
    backgroundColor: colors.white,
    paddingHorizontal: Sizes.pd_10,
    paddingVertical: Sizes.pd_2,
    borderRadius: Sizes.rd_6,
    borderColor: colors.offerCardBorderColor,
    borderWidth: 1,
  },

  offerText: {
    flex: 1,
    fontSize: Sizes.font_11,
    color: colors.ArsenicBlack,
  },

  removeBtn: {
    color: colors.offerRemove,
    fontSize: Sizes.font_11,
    fontWeight: '500',
  },
  applyMoreBuutonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: Sizes.mr_1,
  },

  applyMoreBuuton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  applyMore: {
    fontSize: Sizes.font_12,
    color: colors.SteelBlue,
    marginBottom: Sizes.mr_1,
  },
});
