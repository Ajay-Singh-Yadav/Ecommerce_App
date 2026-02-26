import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '@navigation/navigationStrings';
import LogoLoader from '@global/LogoLoader';
import Header from '@global/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@theme/colors';

const ProductList = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Header
        backArrow={true}
        heart={true}
        search={true}
        bag={true}
        title="Buy 3 Classic fir at 1199"
      />
      {loading ? <View style={{flex:1,justifyContent:'center', alignItems:'center'}}><LogoLoader /></View> : <Text>ProductList</Text>}
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
