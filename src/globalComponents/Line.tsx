import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LineProps } from './Type';
import { moderateScale } from 'react-native-size-matters';

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
    width:moderateScale(300),
    flexDirection: 'row',
    alignItems: 'center',
    gap:moderateScale(10),
    marginVertical:10
  },
});
