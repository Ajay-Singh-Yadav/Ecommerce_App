

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '@locales/useLanguage';
import { getProducts } from '../../api/axios/getProducts';
import HorizontalProductList from '@screens/productDetails/components/HorizontalProductList';

const HomeScreen = () => {
  const { strings } = useLanguage();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fechProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res);
        console.log(res);
      } catch (e) {
        console.log('API ERROR:', e);
      }
    };
    fechProducts();
  }, []);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          justifyContent:'center',
          
        
        },
      }),
    [],
  );

  return (
    <View style={styles.container}>
      <HorizontalProductList products={products} />
    </View>
  );
};

export default HomeScreen;

