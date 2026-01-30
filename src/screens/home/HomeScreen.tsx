import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import ProductList from './components/ProductList';
import { useLanguage } from '../../locales/useLanguage';

const HomeScreen = () => {
  const { language, setLanguage, strings } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang, true); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          onPress={toggleLanguage}
        />
      </View>

      <ProductList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
