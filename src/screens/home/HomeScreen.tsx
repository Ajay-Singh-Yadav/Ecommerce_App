import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useLanguage } from '@locales/useLanguage';

const HomeScreen = () => {
  const { language, setLanguage, strings } = useLanguage();

  useEffect(() => {
    if (!language) {
      setLanguage('en');
    }
  }, [language]);

  return (
    <View>
      <TouchableOpacity onPress={()=> setLanguage('en')}>
        <Text>{strings.ABOUT_US}</Text>
      </TouchableOpacity>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;