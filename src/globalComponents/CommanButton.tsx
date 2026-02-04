import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useMemo, useRef } from 'react';
import { ButtonProps } from './Type';

const CommanButton: React.FC<ButtonProps> = ({
  ButtonText,
  onPress,
  styleButton,
  StyleText,
  Icon,
}) => {
 
  const styles = useMemo(
    () =>
      StyleSheet.create({
        button: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        },
        icon: { marginRight: 8 },
   
      }),
    [],
  );
  return (
    <TouchableOpacity
      style={[styles.button, styleButton]}
      onPress={onPress}
    >
      {Icon && <View >{Icon}</View>}
      {ButtonText && <Text style={StyleText}>{ButtonText}</Text>}
    </TouchableOpacity>
  );
};

export default CommanButton;


