import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {categories} from '@constants/categories'; 
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';

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
    marginVertical: Sizes.mr_5,

  },
  itemContainer: {
    width: Sizes.w_50,
    height: Sizes.h_50,
    backgroundColor: colors.ButtonBgGray, 
    borderRadius: Sizes.rd_10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:Sizes.mr_12,
    // borderWidth:1
  },
  itemText: {
    fontSize: Sizes.font_12,
    fontWeight: '600',
    textAlign: 'center',
  },
});
