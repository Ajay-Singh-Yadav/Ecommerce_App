import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';

import Genuine from '@assets/svg/Genuine.svg';
import Secure from '@assets/svg/Secure.svg';
import Refund from '@assets/svg/Refund.svg';

const Row = ({ label, value, green }: any) => (
  <View style={styles.rowBetween}>
    <Text>{label}</Text>
    <Text style={{ color: green ? 'green' : 'black' }}>{value}</Text>
  </View>
);

const PriceSummary = () => (
  <View style={styles.summary}>
    <Text style={styles.summaryTitle}>Price Summary</Text>

    <Row label="Total" value="₹4,495" />
    <Row label="Total MRP" value="₹10,989" />
    <Row label="Discount" value="-₹6,050" green />
    <Row label="Delivery Fee" value="Free" green />

    <View style={styles.FreeDeliveryContainer}>
      {' '}
      <Text style={styles.freeDelivery}>Yay! You get FREE delivery</Text>
    </View>
    <View
      style={{
        marginTop: Sizes.mr_14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Genuine width={Sizes.w_60} height={Sizes.h_60} />
      <Secure width={Sizes.w_60} height={Sizes.h_60} />
      <Refund width={Sizes.w_60} height={Sizes.h_60} />
    </View>
  </View>
);

export default PriceSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  FreeDeliveryContainer: {
    marginTop: Sizes.mr_10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  freeDelivery: {
    color: 'green',
  },

  summary: {
    padding: 15,
  },

  summaryTitle: {
    fontWeight: '600',
    marginBottom: 10,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
