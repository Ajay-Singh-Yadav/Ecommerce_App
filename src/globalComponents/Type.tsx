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
  logo?: boolean;
  search?: boolean;
  bell?: boolean;
  heart?:  boolean;
  bag?: boolean;
  backArrow?: boolean;
  share?:boolean;
  headertStyle?:any;
  subHeaderStyle?:any;
  backPress?: ()=> void;
}
