import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import images from '../../../constants/images.json';
const { width } = Dimensions.get('window');

export default function ImageSlider() {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  imageWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: 250,
    borderRadius: 12,
  },
});
