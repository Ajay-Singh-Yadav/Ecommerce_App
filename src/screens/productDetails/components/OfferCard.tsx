import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface OfferCardProps {
  title: string;
  subtitle: string;
  code?: string;
  autoApplied?: boolean;
  bgColor?: string;
  price?: string;
  getPrice?: string;
  distPrice?: string;
  uptoPrice?: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
  title,
  subtitle,
  code,
  autoApplied,
  distPrice,
  price,
  getPrice,
  uptoPrice,
  bgColor = '#F8F3FF',
}) => {
  return (
    <View style={[styles.card, { backgroundColor: colors.white }]}>
      <View style={styles.content}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{ color: colors.offerPriceColor }}>{distPrice}</Text>
          <Text
            style={{
              textDecorationLine: 'line-through',
              color: colors.offerGrayProce,
            }}
          >
            {price}
          </Text>
          <Text
            style={{
              color: colors.offerPriceColor,
            }}
          >
            {uptoPrice}
          </Text>
        </View>
        <Text style={styles.subtitle}>{subtitle} </Text>

        <View style={styles.bottomRow}>
          {autoApplied ? (
            <Text style={styles.autoApplied}>AUTO APPLIED</Text>
          ) : (
            <Text style={styles.code}>{code}</Text>
          )}
          <Text style={styles.tnc}>View T&C</Text>
        </View>
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  card: {
    width: Sizes.w_240,
    borderRadius: Sizes.rd_12,
    padding: Sizes.pd_8,
    borderWidth: 0.7,
    backgroundColor: colors.white,
    borderColor: colors.offerCardBorderColor,
    position: 'relative',
  },

  iconText: {
    fontSize: Sizes.font_12,
  },

  content: {
    marginTop: Sizes.mr_2,
  },

  title: {
    fontSize: Sizes.font_12,
    fontWeight: '500',
    color: colors.offerBalc,
  },

  subtitle: {
    fontSize: Sizes.font_10,
    color: colors.offerGrayProce,
    marginTop: Sizes.mr_4,
  },

  bottomRow: {
    marginTop: Sizes.mr_12,
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.offerDasDas,
    paddingTop: Sizes.pd_8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  autoApplied: {
    fontSize: Sizes.font_10,
    fontWeight: '500',
    color: colors.offerApplied,
  },

  code: {
    fontSize: Sizes.font_10,
    fontWeight: '500',
    color: colors.offerApplied,
  },

  tnc: {
    textDecorationLine: 'underline',
    fontSize: Sizes.font_8,
    color: colors.offerViewTC,
  },
});
