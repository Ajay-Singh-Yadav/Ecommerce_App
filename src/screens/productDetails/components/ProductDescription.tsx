import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useLanguage } from '@locales/useLanguage';
import { Sizes } from '@theme/sizes';

import Decription from '@assets/svg/Decription.svg';

import Return from '@assets/svg/Return.svg';
import DownArrow from '@assets/svg/DownArrow.svg';
import Genuine from '@assets/svg/Genuine.svg';
import Secure from '@assets/svg/Secure.svg';
import Refund from '@assets/svg/Refund.svg';
import colors from '@theme/colors';

interface MultiLang {
  en: string;
  ar: string;
}

interface ReturnPolicy {
  title: MultiLang;
  description: MultiLang;
}

interface Props {
  description?: MultiLang;
  returnPolicy?: ReturnPolicy;
}

{
  /* <Text style={styles.policyDescription}>
          {returnPolicy?.description?.[language] ||
            returnPolicy?.description?.en}
        </Text> */
}

{
  /* <Text style={styles.descriptionText}>
        {description?.[language] || description?.en}
      </Text> */
}
const ProductDescription: React.FC<Props> = ({ description, returnPolicy }) => {
  const { language, strings } = useLanguage();
  const [showDescription, setShowDescription] = useState(false);
  const [showReturn, setShowReturn] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.productDescription}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: Sizes.gap_6,
            }}
          >
            <Decription width={Sizes.w_24} height={Sizes.h_24} />
            <Text style={styles.sectionTitle}>
              {strings.PRODUCT_DESCRIPTION}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setShowDescription(!showDescription)}
          >
            <DownArrow
              width={Sizes.w_16}
              height={Sizes.h_16}
              style={{
                transform: [{ rotate: showDescription ? '180deg' : '0deg' }],
              }}
            />
          </TouchableOpacity>
        </View>
        {showDescription && (
          <Text style={styles.descriptionText}>
            {description?.[language] || description?.en}
          </Text>
        )}

        <View style={styles.productDescription}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: Sizes.gap_6,
            }}
          >
            <Return width={Sizes.w_24} height={Sizes.h_24} />
            <Text style={styles.policyTitle}>
              {returnPolicy?.title?.[language] || returnPolicy?.title?.en}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setShowReturn(!showReturn)}>
            <DownArrow
              width={Sizes.w_16}
              height={Sizes.h_16}
              style={{
                transform: [{ rotate: showReturn ? '180deg' : '0deg' }],
              }}
            />
          </TouchableOpacity>
        </View>
        {showReturn && (
          <Text style={styles.policyDescription}>
            {returnPolicy?.description?.[language] ||
              returnPolicy?.description?.en}
          </Text>
        )}
      </View>

      <View
        style={{
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
};

export default ProductDescription;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: Sizes.mr_22,
    backgroundColor: colors.white,
    borderRadius: Sizes.rd_12,
    borderColor: colors.borderColor,
    marginVertical: Sizes.mr_12,
    borderWidth: 1,
  },
  productDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Sizes.rd_12,

    padding: Sizes.mr_10,
  },

  sectionTitle: {
    fontSize: Sizes.mr_12,
    fontWeight: '600',
    color: colors.ArsenicBlack,
  },

  descriptionText: {
    fontSize: Sizes.font_12,
    color: colors.SLATE_GRAY,
    marginHorizontal: Sizes.mr_12,
  },

  policyItem: {
    marginBottom: 12,
  },

  policyTitle: {
    fontSize: Sizes.mr_12,
    fontWeight: '600',
    color: colors.ArsenicBlack,
  },

  policyDescription: {
    fontSize: Sizes.font_12,
    color: colors.SLATE_GRAY,
    marginHorizontal: Sizes.mr_12,
  },
});
