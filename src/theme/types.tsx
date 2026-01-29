import { ViewStyle } from "react-native";

export interface DottedLineProps {
  color?: string;
  thickness?: number;
  style?: ViewStyle;
}

export interface LineSeparatorProps {
  color?: string;
  thickness?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  width?: number | `${number}%`;
  style?: object; 
}