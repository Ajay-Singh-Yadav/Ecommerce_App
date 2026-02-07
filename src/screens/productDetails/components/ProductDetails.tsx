import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import Header from '@global/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@theme/colors';
import { rh, rpm } from '@theme/responsive';
import BanerSlider from '@global/BanerSlider';
import { imageSlider } from '@constants/imagePath';

const ProductDetails = ({ navigation }: any) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const styles = useMemo(
    () =>
      StyleSheet.create({
        headerContainer: {
          backgroundColor: colors.neutral_0,
          height: rh(10),
          marginBottom: rpm(10)
        },
        subHeaderStyle: {
          height: rh(20),
          marginTop: rpm(30),
        },
      }),
    [],
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral_0 }}>
      <Header
        backArrow={true}
        share={true}
        heart={true}
        bag={true}
        headertStyle={styles.headerContainer}
        backPress={handleBack}
        subHeaderStyle={styles.subHeaderStyle}
      />
      {/* <BanerSlider imageData={imageSlider} /> */}
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
