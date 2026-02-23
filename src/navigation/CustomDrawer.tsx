import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import User from '@assets/svg/User.svg';
import Line from '@global/Line';
import { moderateScale } from 'react-native-size-matters';
import Close from '@assets/svg/Close.svg';

import colors from '@theme/colors';
import { useLanguage } from '@locales/useLanguage';
import navigationStrings from './navigationStrings';
import { Sizes } from '@theme/sizes';
import { useEffect, useState } from 'react';

const icons = {
  myAccount: require('@assets/images/MyAccount.png'),
  wallet: require('@assets/images/wllet.png'),
  wishlist: require('@assets/images/wishlist.png'),
  delivery: require('@assets/images/delivery.png'),
  women: require('@assets/images/women.png'),
  men: require('@assets/images/men.png'),
  shop: require('@assets/images/shop.png'),
};


const DrawerRow = ({ title, IconPath, language }: any) => (
  <View style={style.drawerStyle}>
    {IconPath && (
      <View style={style.drawerImageStyle}>
        <Image
          source={IconPath}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      </View>
    )}

    <TouchableOpacity
      style={language ? style.LanguageButton : null}
      activeOpacity={0.4}
    >
      <Text style={style.drawerText}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const ProfileBox = ({ title, IconPath }: any) => (
  <View style={{ alignItems: 'center', gap: moderateScale(5) }}>
    <TouchableOpacity style={style.profileBoxStyle}>
      {IconPath && (
        <Image
          source={IconPath}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      )}
    </TouchableOpacity>

    <Text style={style.profileBoxText}>{title}</Text>
  </View>
);

export const CustomDrawer = (props: any) => {
  const navigation = props.navigation;
   const { language, setLanguage } = useLanguage();





  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingTop: 10 }}
      automaticallyAdjustContentInsets={false}
    >
      {/* Header */}
      <View style={style.header}>
        <View style={style.subHeader}>
          <User width={moderateScale(24)} height={moderateScale(24)} />
          <View style={{ marginHorizontal: moderateScale(10) }}>
            <View>
              <Text>Hey There!</Text>
              <TouchableOpacity
                style={style.subTextHeader}
                onPress={() =>
                  navigation.navigate(navigationStrings.LOGIN_SIGNUP)
                }
              >
                <Text style={style.loginSignupStyle}>Login / Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Close width={moderateScale(22)} height={moderateScale(22)} />
        </TouchableOpacity>
      </View>

      <Line
        text="SHOP IN"
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />

      {/* SHOP SECTION */}
      <DrawerRow title="Men" IconPath={icons.men} />
      <DrawerRow title="Women" IconPath={icons.women} />

      <Line
        text="ENGAGE"
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />
      <DrawerRow title="Find a Store" IconPath={icons.shop} />
      <Line
        text="Language"
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />
     <View style={style.LanguageContainer}>
  <DrawerRow
    title="Arabic"
    language
    selected={language === 'ar'}
    onPress={() => setLanguage('ar')}
  />

  <DrawerRow
    title="English"
    language
    selected={language === 'en'}
    onPress={() => setLanguage('en')}
  />
</View>
      <Line
        text="MY PROFILE"
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />

      {/* PROFILE GRID */}
      <View style={{ flexDirection: 'row' }}>
        <ProfileBox title="My Account" IconPath={icons.myAccount} />
        <ProfileBox title="My Orders" IconPath={icons.delivery} />
        <ProfileBox title="My Wallet" IconPath={icons.wallet} />
        <ProfileBox title="Wishlist" IconPath={icons.wishlist} />
      </View>
      <Line
        text="CONTACT US"
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />
      {/* FOOTER */}
      <DrawerRow title="Help & Support" />
      <DrawerRow title="Feedback" />
      <Line
        text="ABOUT US"
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />
      <DrawerRow title="Our Story" />
      <DrawerRow title="Fanbook" />
      <Text style={{ color: colors.lightGray }}>App version 2.0.0</Text>
    </DrawerContentScrollView>
  );
};
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  subHeader: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  subTextHeader: {
    flexDirection: 'row',
  },
  loginSignupStyle: {
    color: colors.brand_blue,
    fontSize: moderateScale(12),
  },
  LineStyle: {
    flex: 1,
    borderWidth: 0.5,
  },
  textLineStyle: {
    fontSize: moderateScale(10),
  },
  profileBoxStyle: {
    width: moderateScale(50),
    height: moderateScale(50),
    marginRight: moderateScale(10),
    borderRadius: 10,
    alignItems: 'center',
  },
  profileBoxText: {
    fontSize: moderateScale(10),
  },
  drawerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(8),
    gap: moderateScale(10),
  },
  drawerImageStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  drawerText: {
    fontSize: moderateScale(12),
  },
  LanguageContainer: {
    flexDirection: 'row',
    gap: Sizes.mr_10,
  },
  LanguageButton: {
    borderWidth: 1,
    borderRadius: Sizes.rd_8,
    padding: Sizes.pd_6,
  },
  LanguageButtonSelected: {
  backgroundColor: colors.brand_blue,
  borderColor: colors.brand_blue,
},
});
