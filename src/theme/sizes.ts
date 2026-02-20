import { moderateScale, verticalScale } from 'react-native-size-matters';

const range = (prefix: string, scaleFn = moderateScale) => {
  const obj: Record<string, number> = {};
  for (let i = 1; i <= 100; i++) {
    obj[`${prefix}_${i}`] = scaleFn(i);
  }
  return obj;
};

type SizeMap = Record<string, number>;

export const sizes: SizeMap & {
  iconSm: number;
  iconMd: number;
  iconLg: number;
  btnHeight: number;
  headerHeight: number;
} = {
  ...range('spacing'),
  ...range('fontSize'),
  ...range('radius'),
  ...range('margin'),
  ...range('padding'),
  ...range('height', verticalScale),

  iconSm: moderateScale(16),
  iconMd: moderateScale(20),
  iconLg: moderateScale(24),

  btnHeight: verticalScale(48),
  headerHeight: verticalScale(56),
};
