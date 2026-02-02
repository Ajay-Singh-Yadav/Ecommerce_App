import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

import { isTablet, isSmallDevice } from './device';

// Responsive Width rw
export const rw = (value: number) => {
  if (isTablet) return scale(value * 1.3);
  if (isSmallDevice) return scale(value * 0.95);
  return scale(value);
};

// Responsive Height rh
export const rh = (value: number) => {
  if (isTablet) return verticalScale(value * 1.3);
  if (isSmallDevice) return verticalScale(value * 0.95);
  return verticalScale(value);
};
// Responsive Font Size rs
export const rs = (value: number) => {
  if (isTablet) return moderateScale(value * 1.3);
  if (isSmallDevice) return moderateScale(value * 0.95);
  return moderateScale(value);
};
// Responsive Border Radius br
export const br = (value: number) => {
  return moderateScale(value);
};
// Responsive Padding or Margin
export const rpm = (value: number) => {
  return moderateVerticalScale(value);
};
