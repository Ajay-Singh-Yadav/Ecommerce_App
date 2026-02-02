import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import colors from '@theme/colors';
import { rh, rpm, rw } from '@theme/responsive';
import { imagePath } from '@constants/imagePath';

const Header = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          height: rh(80),
          // marginHorizontal:rpm(50),
          backgroundColor: colors.primary,
        },
        leftrightContaine: {
          flexDirection: 'row',
          width: '100%',
          height: rh(40),
          marginTop: rpm(40),
          borderWidth: 1,
        },
        leftContainer: {
          width: rw(70),
          height: rh(40),
          marginTop: rpm(40),
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
        },
        rightContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
        },
        logoStyle: {
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        },
      }),
    [],
  );

  return (
    <View style={styles.container}>
      {/* <View style={styles.leftrightContaine}> */}
      <View style={styles.leftContainer}>
        <Image source={imagePath.logoIcon} style={styles.logoStyle} />
        {/* <Bag  width={30} height={30} /> */}
      </View>
      <View style={styles.rightContainer}></View>
      {/* </View> */}
    </View>
  );
};

export default Header;
