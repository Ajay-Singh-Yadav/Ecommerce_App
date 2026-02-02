import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';

import { InputFieldProps } from './Type';
import imagePath from '../constants/imagePath';
import { Color } from '../colors/colors';
import { moderateScale } from 'react-native-size-matters';
import StaticStrings from '../constants/StaticStrings';

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  placeholderColor,
  label,
  icon,
  secureText,
  value,
  onChangeText,
  error,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassVisible = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.inputContainer]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          secureTextEntry={secureText && !passwordVisible}
        />
        {icon && (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.eyeButton}
            onPress={togglePassVisible}
          >
            <Image
              source={passwordVisible ? imagePath.eyeOpen : imagePath.eyeClose}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginBottom: 14,
  },

  label: {
    marginBottom: 6,
    color: Color.textDark,
    fontSize: 16,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.textDark,
    borderRadius: 8,
    height: 48,
    marginVertical: moderateScale(8),
  },

  input: {
    flex: 1,
    color: Color.textDark,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  eyeButton: {
    padding: 4,
    marginRight: 4,
  },
  eyeIcon: {
    width: 25,
    height: 25,
  },
  errorText: {
    color: Color.red,
    fontSize: moderateScale(11),
    marginLeft:moderateScale(4)
  },
});
