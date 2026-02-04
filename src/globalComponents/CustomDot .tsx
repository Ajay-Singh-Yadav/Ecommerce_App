import { br, rh, rpm, rw } from '@theme/responsive';
import Animated, { useAnimatedStyle, interpolate, Extrapolation, SharedValue} from 'react-native-reanimated';




export const CustomDot  = ({ index, progress }: { index: number;  progress: SharedValue<number> }) => {
  const animatedStyle = useAnimatedStyle(() => {

    const scale = interpolate(
      progress.value,
      [index - 2, index - 1, index, index + 1, index + 2],
      [0.6, 0.8, 1.3, 0.8, 0.6],
      Extrapolation.CLAMP
    );

    
    const opacity = interpolate(
      progress.value,
      [index - 1, index, index + 1],
      [0.4, 1, 0.4],
      Extrapolation.CLAMP
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
          width: rw(10),
          height: rh(3),
          borderRadius: br(6),
          backgroundColor: '#000',
          marginHorizontal: rpm(2),
          
        },
        animatedStyle,
      ]}
    />
  );
};
