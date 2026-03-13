import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const logocolors = [colors.primary, colors.red, colors.black, colors.yellow];

const LogoLoader = ({ size = 35 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % logocolors.length);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const color = logocolors[index];

  return (
    <View style={styles.shadowContainer}>
      <View style={styles.logoContainer}>
        <Svg width={size} height={20} viewBox="0 0 34 18">
          <Path
            d="M16.164 11.369c0 1.075-.186 2.043-.557 2.867a5.574 5.574 0 0 1-1.605 2.08c-.693.555-1.554.985-2.534 1.254-.996.287-2.11.43-3.36.43-1.234 0-2.365-.143-3.362-.43-.996-.287-1.858-.699-2.55-1.255a5.448 5.448 0 0 1-1.622-2.079C.186 13.412 0 12.444 0 11.37s.186-2.043.574-2.868a5.796 5.796 0 0 1 1.622-2.079 7.075 7.075 0 0 1 2.55-1.254c.997-.287 2.128-.43 3.361-.43s2.365.143 3.362.43c.996.287 1.84.699 2.533 1.254a5.574 5.574 0 0 1 1.605 2.08c.371.842.557 1.792.557 2.867Zm17.194 0c0 1.075-.185 2.043-.557 2.867a5.574 5.574 0 0 1-1.605 2.08c-.692.555-1.554.985-2.533 1.254-.997.287-2.111.43-3.361.43-1.233 0-2.365-.143-3.361-.43-.997-.287-1.858-.699-2.55-1.255a5.448 5.448 0 0 1-1.622-2.079c-.389-.824-.575-1.792-.575-2.867s.186-2.043.575-2.868a5.796 5.796 0 0 1 1.621-2.079 7.076 7.076 0 0 1 2.55-1.254c.997-.287 2.129-.43 3.362-.43s2.364.143 3.36.43c.997.287 1.842.699 2.534 1.254a5.574 5.574 0 0 1 1.605 2.08c.371.842.557 1.792.557 2.867Zm-.979-6.094-1.3-1.29c-1.166-1.093-2.72-1.613-4.257-1.416l-2.348.305-.287-2.51L26.535.06c2.23-.287 4.459.466 6.13 2.043l.018.018L34 3.429l-1.62 1.846Z"
            fill={color}
          />
        </Svg>
      </View>
    </View>
  );
};

export default LogoLoader;

const styles = StyleSheet.create({
  shadowContainer: {
    borderRadius: Sizes.rd_12,
    backgroundColor: colors.white,

    elevation: 8,
  },

  logoContainer: {
    width: Sizes.w_100,
    height: Sizes.h_60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Sizes.rd_12,
    overflow: 'hidden',
  },
});
