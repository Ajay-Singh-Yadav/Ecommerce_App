import { useState, useEffect } from 'react';
import { Dimensions, Platform, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { moderateScale } from './utils';

const useDeviceMetrics = () => {
  const [metrics, setMetrics] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    scale: 1,
    pixelDensity: 1,
    platform: Platform.OS,
    textScale: PixelRatio.get() > 2 ? 1.2 : 1,
  });

  useEffect(() => {
    const onChange = ({ window }) => {
      setMetrics(prevMetrics => ({
        ...prevMetrics,
        width: window.width,
        height: window.height,
      }));
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    const getDeviceInfo = async () => {
      const scale = await DeviceInfo.getScreenScale();
      getScreenScale;
      const pixelDensity = await DeviceInfo.getDisplayDensity();
      setMetrics(prevMetrics => ({
        ...prevMetrics,
        scale,
        pixelDensity,
      }));
    };

    getDeviceInfo();

    return () => {
      subscription.remove();
    };
  }, []);

  const scaleText = size => {
    return moderateScale(size, metrics.textScale);
  };

  const scaleModerate = size => {
    return moderateScale(size);
  };

  return {
    ...metrics,
    scaleText,
    scaleModerate,
  };
};

export default useDeviceMetrics;
