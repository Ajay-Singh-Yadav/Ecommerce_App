import {
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { DevliveyDetailsProp } from '../Type';
import { useLanguage } from '@locales/useLanguage';
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';
//SVG

import RightArrow from '@assets/svg/RightArrow.svg';
import { imagePath } from '@constants/imagePath';

import HeaderDelivery from '@assets/svg/HeaderDelivery.svg';

const DevliveryDetails: React.FC<DevliveyDetailsProp> = ({
  pinCode,
  onCheckPinCode,
  expectedDate,
}) => {
  const { strings } = useLanguage();
  return (
    <View style={styles.DevliveryContainer}>
      <Text style={styles.checkDetailsText}>{strings.CHECK_DELIVERY}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Pincode"
          placeholderTextColor={colors.textlightGray}
          style={styles.inputStyle}
        />
        <TouchableOpacity style={styles.checkButton}>
          <Text style={styles.checkButtonText}>Check</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.devliveryContainer}>
        <HeaderDelivery
          width={Sizes.w_22}
          height={Sizes.h_22}
          fill={colors.white}
          style={{
            transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
          }}
        />

        <Text style={styles.expectedDateText}>{strings.EXPECTED_DATE}</Text>
      </View>

      <View style={styles.devliveryContainer}>
        <HeaderDelivery
          width={Sizes.w_22}
          height={Sizes.h_22}
          fill={colors.white}
          style={{
            transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
          }}
        />

        <Text style={styles.expectedDateText}>{strings.CASH_ON_DEVLIVERY}</Text>
      </View>

      <View style={styles.headerContainer}>
        <HeaderDelivery
          width={Sizes.w_20}
          height={Sizes.h_20}
          fill={colors.white}
          style={{
            transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
          }}
        />
        <Text style={styles.headerText}>{strings.FREE_SHIPPIG}</Text>
      </View>
    </View>
  );
};

export default DevliveryDetails;

const styles = StyleSheet.create({
  DevliveryContainer: {
    marginHorizontal: Sizes.mr_12,
  },
  checkDetailsText: {
    fontSize: Sizes.font_12,
    color: colors.checkDetals,
    fontWeight: '600',
    marginBottom: Sizes.mr_10,
  },
  inputMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: Sizes.rd_8,
    borderColor: colors.silver,
    flexDirection: 'row',
    paddingHorizontal: Sizes.pd_10,
  },
  inputStyle: {
    width: '90%',
    fontSize: Sizes.font_10,
  },
  checkButton: {},
  checkButtonText: {
    fontSize: Sizes.font_12,
    color: colors.SteelBlue,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  devliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizes.gap_6,
    marginVertical:Sizes.mr_4
  },
  expectedDateText: {
    fontSize: Sizes.font_10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1EDFF',
    padding: Sizes.pd_4,
    justifyContent: 'center',
    gap: Sizes.gap_4,
    borderRadius:Sizes.rd_8,
    marginVertical:Sizes.mr_4
  },

  headerText: {
    color: '#1C6C9E',
    fontSize: Sizes.font_10,
    fontWeight: '600',
  },
});
