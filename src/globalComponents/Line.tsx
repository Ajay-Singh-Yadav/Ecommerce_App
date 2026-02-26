import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LineProps } from './Type';
import { Sizes } from '@theme/sizes';

const Line: React.FC<LineProps> = ({ style, text, textStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={textStyle}>{text}</Text>
      <View style={style} />
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
