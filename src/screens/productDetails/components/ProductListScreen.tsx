import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Categories from '@assets/svg/Categories.svg';
import SettingIcon from '@assets/svg/SettingIcon.svg';
import colors from '@theme/colors';
import { rh, rw } from '@theme/responsive';
import NavigationStrings from '@navigation/NavigationStrings';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../Type';

export default function ProductListScreen() {
  const navigation = useNavigation<any>();
  const [products, setProducts] = useState([]);
  const [grid, setGrid] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        console.log('Data=>', data);
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  console.log('Pro=>', products);

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={grid ? styles.gridCard : styles.listCard}
      onPress={() =>
        navigation.navigate(NavigationStrings.PRODUCT_DETAILS, {
          product: item,
        })
      }
    >
      <Image
        source={{
          uri:
            item.thumbnail ||
            item.images?.[0] ||
            'https://via.placeholder.com/150',
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <Text style={styles.stock}>
          {item.stock > 0 ? item.availabilityStatus : 'Out of Stock'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Toggle Grid/List */}
      <View style={styles.toggleRow}>
        <TouchableOpacity
          onPress={() => setGrid(true)}
          style={[styles.iconButton, grid && styles.iconButtonActive]}
        >
          <Categories width={rw(24)} height={rh(24)} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGrid(false)}
          style={[styles.iconButton, !grid && styles.iconButtonActive]}
        >
          <SettingIcon width={rw(24)} height={rh(24)} />
        </TouchableOpacity>
      </View>

      <FlatList
        key={grid ? 'g' : 'l'}
        data={products}
        renderItem={renderItem}
        numColumns={grid ? 2 : 1}
        columnWrapperStyle={grid && { justifyContent: 'space-between' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background2,
    flex: 1,
  },
  toggleRow: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#F2F2F2',
  },
  iconButtonActive: {
    backgroundColor: colors.neutral_300,
  },
  category: {
    fontSize: 12,
    color: colors.dark,
    marginTop: 4,
  },
  stock: {
    fontSize: 12,
    color: colors.primary2,
    marginTop: 2,
    fontWeight: '500',
  },

  gridCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
  },
  listCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    gap: 12,
  },
  image: {
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.dark,
  },
  price: {
    marginTop: 4,
    color: colors.primary2,
    fontWeight: 'bold',
  },
});
