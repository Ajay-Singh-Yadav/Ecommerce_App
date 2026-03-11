import React, { useRef, useMemo, useEffect, useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleProp,
  ViewStyle,
  ImageStyle,
  Text,
} from 'react-native';
import Video from 'react-native-video';

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import { CustomDot } from './CustomDot ';
import navigationStrings from '@navigation/navigationStrings';
import { Sizes } from '@theme/sizes';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type Props = {
  width?: number;
  height?: number;
  imageData?: any[];
  buttonStyle?: StyleProp<ViewStyle>;
  carouselStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  tagline?: string;
  products?: any;
};

const BanerSlider: React.FC<Props> = ({
  width,
  height,
  imageData = [],
  buttonStyle,
  carouselStyle,
  imageStyle,
  tagline,
  products,
}) => {
  const navigation = useNavigation<any>();
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);

  const sliderWidth = useMemo(() => width ?? SCREEN_WIDTH, [width]);

  const [autoHeight, setAutoHeight] = useState(200);
  const [activeIndex, setActiveIndex] = useState(0);
  const isCurrentVideo = imageData[activeIndex]?.type === 'video';

  const sliderHeight = height ?? autoHeight;

  const handleNavigation = (item: any) => {
    if (!item.category) return;
    navigation.navigate(navigationStrings.PRODUCT_LIST, {
      category: item.category,
    });
  };

  useEffect(() => {
    if (!imageData?.length || height) return;

    const first = imageData[0];

    if (first?.type === 'image' && first?.src) {
      if (typeof first.src === 'string') {
        Image.getSize(first.src, (w, h) => {
          setAutoHeight(sliderWidth * (h / w));
        });
      } else {
        const asset = Image.resolveAssetSource(first.src);
        setAutoHeight(sliderWidth * (asset.height / asset.width));
      }
    }

    if (first?.type === 'video') {
      setAutoHeight(sliderWidth * 0.6);
    }
    console.log(imageData);
  }, [imageData, sliderWidth, height]);

  return (
    <View style={[{ alignItems: 'center', width: '100%' }, buttonStyle]}>
      {tagline && (
        <Text
          style={{
            width: '100%',
            fontSize: Sizes.font_14,
            fontWeight: '600',
            marginBottom: Sizes.mr_8,
            paddingHorizontal: Sizes.mr_12,
          }}
        >
          {tagline}
        </Text>
      )}
      <Carousel
        ref={ref}
        data={imageData}
        width={sliderWidth}
        height={sliderHeight}
        autoPlay={!isCurrentVideo}
        autoPlayInterval={2500}
        scrollAnimationDuration={800}
        onSnapToItem={i => setActiveIndex(i)}
        onProgressChange={progress}
        onConfigurePanGesture={g => g.activeOffsetX([-10, 10])}
        renderItem={({ item, index }) => {
          const isVideo = item.type === 'video';
          const source =
            typeof item.src === 'string' ? { uri: item.src } : item.src;

          return (
            <View>
              <TouchableOpacity activeOpacity={0.9} onPress={() => handleNavigation(item)}>
                {isVideo ? (
                  <Video
                    source={source}
                    repeat
                    onEnd={() => {
                      const isLast = activeIndex === imageData.length - 1;

                      if (isLast) {
                        ref.current?.scrollTo({ index: 0, animated: true });
                      } else {
                        ref.current?.next();
                      }
                    }}
                    style={{
                      width: '100%',
                      height: sliderHeight,
                      borderRadius: Sizes.rd_12,
                    }}
                    resizeMode="cover"
                    muted
                    paused={activeIndex !== index}
                  />
                ) : (
                  <Image
                    source={
                      typeof item.src === 'string'
                        ? { uri: item.src }
                        : item.src
                    }
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: sliderHeight,
                      borderRadius: Sizes.rd_12,
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        }}
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
