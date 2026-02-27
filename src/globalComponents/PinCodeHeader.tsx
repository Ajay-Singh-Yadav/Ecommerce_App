import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useMemo } from 'react';
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';
//SVG
import Loaction from '@assets/svg/Loaction.svg';
import DownArrow from '@assets/svg/DownArrow.svg';
import { useLanguage } from '@locales/useLanguage';
import fontFamily from '@theme/fontFamily';

const PinCodeHeader = ({ pinCode }: any) => {
  const { strings } = useLanguage();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          height: Sizes.h_30,
          justifyContent: 'center',
          backgroundColor: colors.Gradient_start,
          marginBottom: Sizes.mr_10,
     
      
        },
        piCodeButton: {
          flexDirection: 'row',
          gap: Sizes.gap_2,
          alignItems: 'center',
        },
        iconContainer: {
          marginHorizontal: Sizes.mr_10,
          flexDirection: 'row',
          alignItems: 'center',
          gap: Sizes.gap_6,
            
        },
        pinCode: {
          color: colors.black,
          fontWeight: '500',
          fontSize: Sizes.font_10,
        },
        delivery: {
          color: colors.lightMidGray,
          fontSize: Sizes.font_10,
        //   fontFamily: fontFamily.medium,
        },
      }),
    [],
  );
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Loaction width={Sizes.w_14} height={Sizes.h_14} />
        <Text style={styles.delivery}>{strings.DELIVERY}</Text>
        <TouchableOpacity style={styles.piCodeButton}>
          <Text style={styles.pinCode}>{pinCode}</Text>
          <DownArrow width={Sizes.w_14} height={Sizes.h_14} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PinCodeHeader;
