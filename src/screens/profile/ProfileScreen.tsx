import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationStrings from '@navigation/navigationStrings';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

const quickActions = [
  {
    id: '1',
    name: 'order',
    icon: require('../../assets/images/delivery.png'),
  },
  {
    id: '2',
    name: 'order',
    icon: require('../../assets/images/wllet.png'),
  },
  {
    id: '3',
    name: 'order',
    icon: require('../../assets/images/wishlist.png'),
  },
];

const menuData = [
  {
    section: 'My Addresses',
    data: ['Manage your addresses here'],
  },
  {
    section: 'CONTACT US',
    data: ['Help & Support', 'Become a Seller', 'Feedback & Suggestion'],
  },
  {
    section: 'ABOUT US',
    data: ['Our Story', 'Fanbook'],
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const user = useSelector((state: RootState) => state.user);

console.log('mobile:', user.mobile);
console.log('userId:', user.userId);
console.log('isLoggedIn:', user.isLoggedIn);

  const handleNavigation = ({ item }: any) => {
    navigation.navigate(item?.name || 'order');
  };

  

  const renderAction = ({ item }: any) => (
    <TouchableOpacity
      style={styles.actionCard}
      onPress={() => handleNavigation(item)}
    >
      <Image source={item.icon} style={styles.actionIcon} />
    </TouchableOpacity>
  );

  const renderMenuItem = ({ item }: any) => (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuText}>{item}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* PROFILE */}
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Ajay</Text>
          <Text style={styles.email}>example@gmail.com</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.editText}>EDIT</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.quickActions}>
        <FlatList
          data={quickActions}
          renderItem={renderAction}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.actionList}
        />
      </View>

     
      <FlatList
        data={menuData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.sectionTitle}>{item.section}</Text>

            {item.data.map((menu, i) => (
              <View key={i}>{renderMenuItem({ item: menu })}</View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    backgroundColor: '#F7C325',
    paddingHorizontal: Sizes.pd_16,
    paddingTop: Sizes.pd_20,
    paddingBottom: Sizes.pd_12,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  menuIcon: {
    fontSize: Sizes.font_18,
  },

  headerIcons: {
    flexDirection: 'row',
    gap: Sizes.w_16,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Sizes.pd_16,
  },

  avatar: {
    width: Sizes.w_45,
    height: Sizes.w_45,
    borderRadius: Sizes.circle,
    backgroundColor: '#F7C325',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: Sizes.font_16,
    fontWeight: '700',
  },

  profileInfo: {
    flex: 1,
    marginLeft: Sizes.mr_12,
  },

  name: {
    fontSize: Sizes.font_14,
    fontWeight: '600',
  },

  email: {
    fontSize: Sizes.font_11,
    color: '#777',
    marginTop: Sizes.mr_2,
  },

  editText: {
    fontSize: Sizes.font_12,
    color: '#007AFF',
    fontWeight: '600',
  },

  quickActions: {
    paddingHorizontal: Sizes.pd_16,
    paddingBottom: Sizes.pd_12,
  },

  actionList: {
    justifyContent: 'space-between',
    width: '100%',
  },

  actionCard: {
    width: Sizes.w_100,
    height: Sizes.h_60,
    borderColor: '#eee',
    borderRadius: Sizes.rd_8,
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: Sizes.mr_10,
    // borderWidth: 1,
  },

  actionIcon: {
    width: Sizes.w_60,
    height: Sizes.h_60,
    resizeMode: 'contain',
  },

  actionText: {
    fontSize: Sizes.font_11,
  },

  sectionTitle: {
    fontSize: Sizes.font_11,
    color: '#999',
    paddingHorizontal: Sizes.pd_16,
    marginTop: Sizes.mr_16,
    marginBottom: Sizes.mr_6,
    fontWeight: '600',
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Sizes.pd_14,
    paddingHorizontal: Sizes.pd_16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  menuText: {
    fontSize: Sizes.font_13,
  },

  arrow: {
    fontSize: Sizes.font_18,
    color: '#bbb',
  },
});
