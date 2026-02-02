import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const isSmallDevice = width < 360;
export const isNormalDevice = width >= 360 && width < 400;
export const isLargeDevice = width >= 400 && width < 768;
export const isTablet = width >= 768;

export const pixelRatio = PixelRatio.get();
