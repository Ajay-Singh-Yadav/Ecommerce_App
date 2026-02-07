import { isSmallDevice, isTablet } from '@theme/device';
import {
  Scale,
  ModerateScale,
  ModerateVerticalScale,
  verticalScale,
  scale,
} from 'react-native-size-matters';

//Resposive Width
export const rw = (value: number) => {
  if (isTablet) return scale(value * 1.3);
  if (isSmallDevice) return scale(value * 0.9);
  return scale(value);
};

export const rh = (value: number) => {
  if (isTablet) return verticalScale(value * 1.3);
  if (isSmallDevice) return verticalScale(value * 0.9);
  return verticalScale(value);
};
