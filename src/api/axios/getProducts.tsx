import axios from 'axios';
import Config from 'react-native-config';

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${Config.BASE_URL}/products`);

    return response.data;
  } catch (error) {
    console.log('Fetch Products Error:', error);
    throw error;
  }
};
export const getShirtProducts = async () => {
  try {
    const response = await axios.get(
      `${Config.BASE_URL}/products/category/shirts`,
    );

    return response.data;
  } catch (error) {
    console.log('Fetch Products Error:', error);
    throw error;
  }
};
export const getTShirtProducts = async () => {
  try {
    const response = await axios.get(
      `${Config.BASE_URL}/products/category/tshirts`,
    );

    return response.data;
  } catch (error) {
    console.log('Fetch Products Error:', error);
    throw error;
  }
};
export const getCategoryProducts = async (categoryName:string) => {
  try {
    const response = await axios.get(
      `${Config.BASE_URL}/products/category/${categoryName}`,
    );

    return response.data;
  } catch (error) {
    console.log('Fetch Products Error:', error);
    throw error;
  }
};
