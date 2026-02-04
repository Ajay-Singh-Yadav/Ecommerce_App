import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import categories from '@data/CategoryData'; // import the 15 categories we created

const { width } = Dimensions.get('window');
const ITEM_SIZE = width / 4; 

const CategoryHorizontalList = () => {
  const renderItem = ({ item }: { item: { id: number; name: string } }) => {
    return (
      <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default CategoryHorizontalList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  itemContainer: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: '#f0f0f0', 
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
