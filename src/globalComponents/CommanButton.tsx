import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useMemo } from 'react';
import { ButtonProps } from './Type';

const CommanButton: React.FC<ButtonProps> = ({
  ButtonText,
  onPress,
  styleButton,
  StyleText,
  opacity,
  Icon,
}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        button: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        icon: { marginRight: 8 },
      }),
    [],
  );
  return (
    <TouchableOpacity
      style={[styles.button, styleButton]}
      onPress={onPress}
      activeOpacity={opacity}
    >
      {Icon && <View style={styles.icon}>{Icon}</View>}
      {ButtonText && <Text style={StyleText}>{ButtonText}</Text>}
    </TouchableOpacity>
  );
};

export default CommanButton;
