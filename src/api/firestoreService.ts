import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../api/firebaseConfig';

export const getCollectionWithCache = async (
  collectionName: string,
  cacheKey: string,
  setState?: (data: any[]) => void
) => {
  try {

    const cachedData = await AsyncStorage.getItem(cacheKey);

    if (cachedData) {
      const parsed = JSON.parse(cachedData);
      console.log(`${collectionName} loaded from cache`);

      if (setState) setState(parsed);
    }

    const snapshot = await getDocs(collection(db, collectionName));

    const freshData = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    const cachedParsed = cachedData ? JSON.parse(cachedData) : [];

  
    const isDifferent =
      JSON.stringify(freshData) !== JSON.stringify(cachedParsed);

    if (isDifferent) {
      console.log(`${collectionName} updated from Firestore`);

      await AsyncStorage.setItem(cacheKey, JSON.stringify(freshData));

      if (setState) setState(freshData);
    }

    return freshData;
  } catch (error) {
    console.log(`Error fetching ${collectionName}:`, error);
    return [];
  }
};