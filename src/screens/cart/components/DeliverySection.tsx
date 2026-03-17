import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import Loaction from '@assets/svg/Loaction.svg';

const DeliverySection = () => {
  return (
    <View style={styles.deliveryBox}>
      <View style={styles.leftContainer}>
        <Loaction width={Sizes.w_18} height={Sizes.h_18} />
        <Text style={styles.deliveryText}>
          Deliver to: <Text style={styles.PinText}>244901</Text>
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.changeText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliverySection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  deliveryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Sizes.pd_8,
    borderWidth: 1,
    marginHorizontal: Sizes.mr_18,
    borderRadius: Sizes.rd_8,
    borderColor: colors.borderColor,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizes.gap_4,
  },
  deliveryText: {
    color: colors.textlightGray,
    fontSize: Sizes.font_12,
  },
  PinText: {
    color: colors.ArsenicBlack,
    fontSize: Sizes.font_11,
  },
  changeText: {
    fontSize: Sizes.font_12,
    color: colors.SteelBlue,
    fontWeight: '600',
  },
});
