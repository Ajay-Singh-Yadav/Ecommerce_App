import { moderateScale } from 'react-native-size-matters';
import DeviceInfo from 'react-native-device-info';

export const getFontSize = (
  baseSize: number,
  factor = 0.3,
  maxLimit?: number,
) => {
  const isTablet = DeviceInfo.isTablet();

  const scaled = isTablet ? baseSize : moderateScale(baseSize, factor);
  if (maxLimit && scaled > maxLimit) {
    return maxLimit;
  }

  return scaled;
};
