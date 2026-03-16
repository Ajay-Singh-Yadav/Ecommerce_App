import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
  StatusBar,
  ImageBackground,
} from 'react-native';

const { width } = Dimensions.get('window');

const stories = [
  'https://images.bewakoof.com/t640/men-s-black-all-over-printed-oversized-shirt-685466-1762153108-1.jpg',
  'https://images.bewakoof.com/t1080/men-s-black-johnny-biker-graphic-printed-oversized-t-shirt-608717-1728641286-1.jpg',
  'https://images.bewakoof.com/t1080/men-s-brown-oversized-cargo-joggers-604201-1754575395-1.jpg',
  'https://images.bewakoof.com/t1080/men-s-light-blue-washed-baggy-fit-distressed-mid-rise-jeans-624695-1764746259-1.jpg',
];

import Logo from '@assets/svg/Logo.svg';
import Close from '@assets/svg/Close.svg';
import { useLanguage } from '@locales/useLanguage';

const DURATION = 7000;

const SpecialScreen = ({ navigation }: any) => {
  const { strings } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startProgress();
  }, [currentIndex]);

  const startProgress = () => {
    progress.setValue(0);

    Animated.timing(progress, {
      toValue: 1,
      duration: DURATION,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) nextStory();
    });
  };

  const nextStory = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      navigation.goBack();
    }
  };

  const prevStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: stories[currentIndex] }}
        style={styles.image}
      >
        <View style={styles.progressContainer}>
          {stories.map((_, i) => (
            <View key={i} style={styles.progressBar}>
              {i < currentIndex && <View style={styles.progressFull} />}

              {i === currentIndex && (
                <Animated.View
                  style={[styles.progressActive, { width: progressWidth }]}
                />
              )}
            </View>
          ))}
        </View>

        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.logo}>
              <Logo width={Sizes.w_24} height={Sizes.h_24} />
            </View>
            <Text style={styles.headerText}>{strings.SPECIALS}</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.close}>
              <Close
                width={Sizes.w_24}
                height={Sizes.h_24}
                fill={colors.white}
                strokeOpacity={0.0}
                strokeWidth={0.5}
              />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.touchContainer}>
          <TouchableOpacity
            style={styles.touchLeft}
            onPress={prevStory}
            activeOpacity={1}
          />

          <TouchableOpacity
            style={styles.touchRight}
            onPress={nextStory}
            activeOpacity={1}
          />
        </View>

        <TouchableOpacity style={styles.buyButton} >
          <Text style={styles.buyText}> {strings.BUY_NOW}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SpecialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  progressContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: Sizes.h_50,
    left: Sizes.mr_10,
    right: Sizes.mr_10,
    zIndex: Sizes.mr_20,
  },

  progressBar: {
    flex: 1,
    height: Sizes.h_3,
    backgroundColor: '#ccc',
    marginHorizontal: Sizes.mr_3,
    borderRadius: Sizes.rd_2,
    overflow: 'hidden',
  },

  progressActive: {
    height: Sizes.h_3,
    backgroundColor: colors.white,
  },

  progressFull: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    position: 'absolute',
    top: Sizes.mr_65,
    left: Sizes.mr_15,
    right: Sizes.mr_15,
    zIndex: Sizes.mr_30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',

  },

  logo: {
    width: Sizes.w_32,
    height: Sizes.h_32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Sizes.rd_20,
    backgroundColor: colors.primary,
    marginRight: Sizes.mr_8,
  },

  headerText: {
    fontSize: Sizes.font_15,
    fontWeight: '500',
    color: colors.white,
    marginBottom:Sizes.mr_3
  },

  close: {
    fontSize: Sizes.font_18,
    color: colors.white,
  },

  image: {
    width: width,
    height: '100%',
    resizeMode: 'contain',
    // resizeMode: 'cover',
  },

  touchContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },

  touchLeft: {
    flex: 1,
  },

  touchRight: {
    flex: 1,
  },

  buyButton: {
    position: 'absolute',
    bottom: Sizes.mr_24,
    left: Sizes.mr_20,
    right: Sizes.mr_20,
    backgroundColor: colors.primary,
    paddingVertical: Sizes.pd_8,
    borderRadius: Sizes.rd_8,
    alignItems: 'center',
  },

  buyText: {
    fontSize: Sizes.font_12,
    fontWeight: '600',
    color: colors.ArsenicBlack,
  },
});
