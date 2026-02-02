import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CommanButton from '@global/CommanButton';
import ExpandDown from '@assets/svg/ExpandDown.svg';
import StaticStrings from '@constants/StaticStrings';

const Header = () => {
  return (
    <View>
      <CommanButton
        ButtonText={StaticStrings.Login}
        Icon={<ExpandDown width={20} height={20} />}
      />
      <CommanButton
        ButtonText={StaticStrings.Login}
        Icon={<ExpandDown width={20} height={20}  />}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
