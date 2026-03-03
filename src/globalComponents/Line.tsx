import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LineProps } from './Type';
import { Sizes } from '@theme/sizes';

const Line: React.FC<LineProps> = ({ style, text, textStyle,bgColor }) => {
  return (
    <View style={[styles.container,{backgroundColor:bgColor}]}>
    {text&&   <Text style={textStyle}>{text}</Text>}
          <View style={[style, { backgroundColor: bgColor }]} />
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:Sizes.gap_10,
    marginVertical:Sizes.mr_8
  },
});
