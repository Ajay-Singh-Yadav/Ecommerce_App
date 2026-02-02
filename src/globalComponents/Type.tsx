import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import React from 'react';

export interface ButtonProps {
  ButtonText?: string;
  onPress?: () => void;
  styleButton?: StyleProp<ViewStyle>;
  StyleText?: StyleProp<TextStyle>;
  opacity?: number;
  Icon?: React.ReactNode; 
}



export interface InputFieldProps {
  value?: any;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  placeholderColor?: string;
  label?: string;
  icon?: boolean;
  secureText?: boolean;
  error?: string | undefined;
  onBlur?: any;
}

export interface HeaderProps {
  logo?: any;
}
