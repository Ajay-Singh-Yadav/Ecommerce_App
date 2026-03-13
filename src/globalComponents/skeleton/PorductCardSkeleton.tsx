import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import SkeletonText from './SkeletonText';

const PorductCardSkeleton = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        itemContainer: {
          width: Sizes.w_160,
          height: Sizes.h_260,
          backgroundColor: colors.white,
          marginHorizontal: Sizes.gap_10,
          borderColor: colors.borderColor,
          borderRadius: Sizes.rd_4,
          borderWidth: 1,
        },
        imageContainer: {
          width: '100%',
          height: Sizes.h_180,
          overflow: 'hidden',
        },

        itemTextContainer: {
          flex: 1,
          borderTopWidth: 1,
          borderColor: colors.borderColor,
        },
        itemSubTextContainer: {
          marginHorizontal: Sizes.mr_6,
          marginTop: Sizes.mr_5,
        },

        priceContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: Sizes.gap_6,
          marginVertical: Sizes.gap_6,
          marginTop: Sizes.mr_8,
        },
        brandtitleText: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: Sizes.mr_8,
        },
      }),
    [],
  );
  return (
    <View style={styles.itemContainer}>
      {/* Image Skeleton */}
      <View style={styles.imageContainer}>
        <SkeletonText height={Sizes.h_200}  />
      </View>

      <View style={styles.itemTextContainer}>
        <View style={styles.itemSubTextContainer}>
          <View style={styles.brandtitleText}>
            <View style={{ flex: 1, marginTop: Sizes.mr_8 }}>
              <SkeletonText height={Sizes.h_10} width={Sizes.w_60} />
              <SkeletonText height={Sizes.h_10} width={Sizes.w_80} />
            </View>

            <SkeletonText height={Sizes.h_15} width={Sizes.h_15} />
          </View>

          <View style={styles.priceContainer}>
            <SkeletonText height={Sizes.h_10} width={Sizes.w_30} />
            <SkeletonText height={Sizes.h_10} width={Sizes.w_30} />
            <SkeletonText height={Sizes.h_10} width={Sizes.w_30} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PorductCardSkeleton;
