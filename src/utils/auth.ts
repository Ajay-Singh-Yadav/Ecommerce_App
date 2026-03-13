// utils/auth.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export const isUserLoggedIn = async () => {
  const user = await AsyncStorage.getItem('userLoggedIn');
  return user === 'true';
};