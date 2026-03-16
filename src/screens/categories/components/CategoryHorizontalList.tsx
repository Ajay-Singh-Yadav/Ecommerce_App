import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import { categories } from '@constants/categories';
import { Sizes } from '@theme/sizes';
import colors from '@theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import navigationStrings from '@navigation/navigationStrings';

const { width } = Dimensions.get('window');
const ITEM_SIZE = width / 4;

const CategoryHorizontalList = () => {
  const navigation = useNavigation<any>();

  const handleNavigation = (categoryName: string) => {
    navigation.navigate(navigationStrings.PRODUCT_LIST, {
      categoryName: categoryName,
    });
  };

  const renderItem = ({
    item,
  }: {
    item: { id: number; name: string; img: any };
  }) => {
    const isFirst = item.id === 1;

    return (
      <View style={styles.itemContainer}>
        {isFirst ? (
          <LinearGradient
            colors={[colors.primary, colors.GreenOff, colors.brand_blue]}
            style={styles.gradientBoder}
          >
            <TouchableOpacity style={styles.innerCircle} activeOpacity={0.8}>
              <View style={styles.imageSpcial}>
                <Image
                  source={
                    typeof item.img === 'string' ? { uri: item.img } : item.img
                  }
                  resizeMode="contain"
                  style={styles.categoryImage}
                />
              </View>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <TouchableOpacity
            style={styles.squareItem}
            activeOpacity={0.8}
            onPress={() => handleNavigation(item.name)}
          >
            <View style={styles.imageSquare}>
              <Image
                source={
                  typeof item.img === 'string' ? { uri: item.img } : item.img
                }
                resizeMode="contain"
                style={styles.categoryImage}
              />
            </View>
          </TouchableOpacity>
        )}

        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Sizes.mr_5,
    marginBottom: Sizes.mr_5,
  },
  gradientBoder: {
    width: Sizes.w_50,
    height: Sizes.h_50,
    borderRadius: Sizes.circle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: Sizes.w_46,
    height: Sizes.h_46,
    borderRadius: Sizes.circle,
    backgroundColor: colors.white,
    padding: Sizes.pd_2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  specialCircle: {
    width: Sizes.w_50,
    height: Sizes.h_50,
    borderRadius: Sizes.circle,
    backgroundColor: colors.ButtonBgGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    overflow: 'hidden',
  },
  squareItem: {
    width: Sizes.w_50,
    height: Sizes.h_50,
    borderRadius: Sizes.rd_10,
    backgroundColor: colors.ButtonBgGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSquare: {
    width: Sizes.w_50,
    height: Sizes.h_50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSpcial: {
    width: Sizes.w_40,
    height: Sizes.h_40,
    borderRadius: Sizes.circle,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: Sizes.circle,
  },

  itemText: {
    fontSize: Sizes.font_8,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: Sizes.mr_4,
  },
});
