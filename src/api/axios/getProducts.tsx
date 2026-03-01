import axios from 'axios';
import Config from 'react-native-config';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${Config.BASE_URL}?limit=10`);

    console.log("API DATA:", response.data);

    return response.data.products;
  } catch (e) {
    console.log('Error=>', e);
    return [];
  }
};