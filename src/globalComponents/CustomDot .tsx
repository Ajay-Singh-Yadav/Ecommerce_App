import { Sizes } from '@theme/sizes';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  SharedValue,
} from 'react-native-reanimated';

export const CustomDot = ({
  index,
  progress,
}: {
  index: number;
  progress: SharedValue<number>;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [index - 2, index - 1, index, index + 1, index + 2],
      [0.6, 0.8, 1.3, 0.8, 0.6],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      progress.value,
      [index - 1, index, index + 1],
      [0.4, 1, 0.4],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: Sizes.w_10,
          height: Sizes.h_3,
          borderRadius: Sizes.rd_6,
          backgroundColor: '#000',
          marginHorizontal:Sizes.mr_2,
        },
        animatedStyle,
      ]}
    />
  );
};
