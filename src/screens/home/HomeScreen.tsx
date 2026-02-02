import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import ProductList from './components/ProductList';
import { useLanguage } from '../../locales/useLanguage';
import Header from '@global/Header';


const HomeScreen = () => {
  const { language, setLanguage, strings } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang, true); 
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.buttonContainer}>
       
      </View>

    
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
