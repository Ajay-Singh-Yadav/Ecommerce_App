import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import colors from '@theme/colors';
import { rs, rh, rw, br } from '@theme/responsive';

const CustomInput = () => {
  return (
    <View>
      <Text>CustomInput</Text>
    </View>
  )
}

export default CustomInput



 StyleSheet.create({
  container: {
    marginBottom: rh(14),
  },

  label: {
    fontSize: rs(13),
    color: colors.neutral_700,
    marginBottom: rh(6),
  },

  required: {
    color: colors.red,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral_200,
    borderRadius: br(10),
    paddingHorizontal: rw(10),
    backgroundColor: colors.neutral_0,
  },

  input: {
    flex: 1,
    height: rh(44),
    fontSize: rs(14),
    color: colors.neutral_700,
  },

  rtlInput: {
    textAlign: 'right',
  },

  icon: {
    marginHorizontal: rw(6),
  },

  errorBorder: {
    borderColor: colors.red,
  },

  errorText: {
    marginTop: rh(4),
    fontSize: rs(11),
    color: colors.red,
  },
});