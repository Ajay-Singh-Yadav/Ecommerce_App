import { PixelRatio } from 'react-native';

export const moderateScale = (size, factor = 0.5) => {
  const scale = PixelRatio.get();
  const newSize = size + (scale - 2) * factor;
  return Math.round(newSize);
};
