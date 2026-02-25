import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import FastImage from 'react-native-fast-image';

import { imagePath, imageSlider } from '@constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '@navigation/navigationStrings';

const SplashScreen = () => {
  const navigation =  useNavigation<any>();

       useEffect(()=>{
          setTimeout(()=>{
            navigation.navigate(navigationStrings.LOGIN)
          },2000)
     },[])

  return (


     

    <View style={styles.container}>
      <FastImage
        source={imagePath.SplashImage}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
