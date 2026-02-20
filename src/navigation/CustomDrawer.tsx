import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import User from '@assets/svg/User.svg'


const DrawerRow = ({ title }:any) => (
  <TouchableOpacity style={{ padding:16 }}>
    <Text>{title}</Text>
  </TouchableOpacity>
);
const ProfileBox = ({ title }:any) => (
  <TouchableOpacity
    style={{
      flex:1,
      margin:6,
      padding:12,
      borderRadius:10,
      backgroundColor:'#f2f2f2',
      alignItems:'center'
    }}
  >
    <Text>{title}</Text>
  </TouchableOpacity>
);
export const CustomDrawer = (props:any) => {
  return (
    <DrawerContentScrollView {...props}>
{/* Header */}
  <View style={style.header}>
          <User width={20} height={20} />
        <View style={style.subHeader}>
        <Text>
          Hey There!
        </Text>

       <View>
         <Text style={{ color:'blue' }}>
          Login 
        </Text>
        <Text style={{ color:'blue' }}>
          Login 
        </Text>
       </View>
      </View>

  </View>

      {/* SHOP SECTION */}
      <DrawerRow title="Men" />
      <DrawerRow title="Women" />
      <DrawerRow title="Accessories" />
      <DrawerRow title="Sneakers" />

      {/* PROFILE GRID */}
      <View style={{ flexDirection:'row', padding:16 }}>
        <ProfileBox title="My Account" />
        <ProfileBox title="My Orders" />
        <ProfileBox title="My Wallet" />
        <ProfileBox title="Wishlist" />
      </View>

      {/* FOOTER */}
      <DrawerRow title="Help & Support" />
      <DrawerRow title="Feedback" />

      <Text style={{ padding:16, color:'#999' }}>
        App version 2.0.0
      </Text>

    </DrawerContentScrollView>
  );
};
const style =  StyleSheet.create({
    header:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    borderWidth:1
    },
    subHeader:{
        
    }
})