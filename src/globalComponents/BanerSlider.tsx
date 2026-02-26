import React, { useRef, useMemo, useEffect, useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import { CustomDot } from './CustomDot ';
import navigationStrings from '@navigation/navigationStrings';
import { Sizes } from '@theme/sizes';
import LogoLoader from './LogoLoader';
import colors from '@theme/colors';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type Props = {
  width?: number;
  height?: number;
  imageData?: any[];
  buttonStyle?: StyleProp<ViewStyle>;
  carouselStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
};

const BanerSlider: React.FC<Props> = ({
  width,
  height,
  imageData = [],
  buttonStyle,
  carouselStyle,
  imageStyle,
}) => {
  const navigation = useNavigation<any>();
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);

  const sliderWidth = useMemo(() => width ?? SCREEN_WIDTH, [width]);

  const sliderHeight = useMemo(
    () => height ?? sliderWidth * 0.5,
    [height, sliderWidth],
  );

  const handleNavigation = () => {
    navigation.navigate(navigationStrings.PRODUCT_LIST);
  };

  return (
    <View style={buttonStyle}>
      <Carousel
        ref={ref}
        data={imageData}
        width={sliderWidth}
        height={sliderHeight}
        autoPlay
        autoPlayInterval={2500}
        scrollAnimationDuration={800}
        onProgressChange={progress}
        onConfigurePanGesture={gesture => {
          gesture.activeOffsetX([-10, 10]);
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleNavigation}
            style={carouselStyle}
          >
            <Image
              source={item.img}
              resizeMode="cover"
              style={[
                {
                  width: '100%',
                  height: '100%',
                  borderRadius: Sizes.rd_20,
                },
                imageStyle,
              ]}
            />
          </TouchableOpacity>
        )}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: Sizes.mr_4,
        }}
      >
        {imageData.map((_, index) => (
          <CustomDot key={index} index={index} progress={progress} />
        ))}
      </View>
    </View>
  );
};

export default BanerSlider;
