import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';

export interface ButtonProps {
  ButtonText?: string;
  onPress?: () => void;
  styleButton?: StyleProp<ViewStyle>;
  StyleText?: StyleProp<TextStyle>;
  opacity?: number;
  Icon?: any;
}

export interface CustomInputProps {
  label?: string;
  required?: boolean;
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'phone-pad' | 'numeric';
  error?: string;
  maxLength?: number;

  /** Icons */

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;

  /** Search */
  isSearch?: boolean;
  editable?: boolean;
}

export interface BanerSliderProps {
  onPress?: () => void;
  imageData?: any;
  mode?: string;
  width?: any;
  height?: any;
  carouselStyle?: any;
  buttonStyle?: any;
  PlayInterval?: number;
  AnimationDuration?: number;
  autoPlay?: boolean;
  imageStyle?: any;
}

export interface HeaderProps {
  title?:string;
  logo?: boolean;
  search?: boolean;
  heart?: any | boolean;
  bag?: boolean;
  backArrow?: any | boolean;
  share?: boolean;
  headertStyle?: any;
  subHeaderStyle?: any;
  backPress?: () => void;
}

export interface LineProps {
  style?: any;
  text?: string;
  textStyle?: any;
  bgColor?:string;
}
