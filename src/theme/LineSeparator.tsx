import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import colors from './colors';
import { LineSeparatorProps } from './types';

const LineSeparator: React.FC<LineSeparatorProps> = ({
  color = colors.lightGray,
  thickness = 1,
  marginVertical = moderateScale(9),
  marginHorizontal = 0,
  width = '100%',
  style = {},
}) => {
  return (
    <View
      style={[
        styles.line,
        {
          backgroundColor: color,
          height: thickness,
          marginVertical,
          marginHorizontal,
          width,
        },
        style,
      ]}
    />
  );
};

export default LineSeparator;

const styles = StyleSheet.create({
  line: {
    alignSelf: 'center',
  },
});
