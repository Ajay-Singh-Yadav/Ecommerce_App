import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  I18nManager,
} from 'react-native';
import User from '@assets/svg/User.svg';
import Line from '@global/Line';
import { moderateScale } from 'react-native-size-matters';
import Close from '@assets/svg/Close.svg';

import colors from '@theme/colors';
import { useLanguage } from '@locales/useLanguage';
import navigationStrings from './navigationStrings';
import { Sizes } from '@theme/sizes';
import { useEffect, useMemo, useState } from 'react';
import { logoutUser } from '@redux/reducer/slices/userSlice';

const icons = {
  myAccount: require('@assets/images/MyAccount.png'),
  wallet: require('@assets/images/wllet.png'),
  wishlist: require('@assets/images/wishlist.png'),
  delivery: require('@assets/images/delivery.png'),
  women: require('@assets/images/women.png'),
  men: require('@assets/images/men.png'),
  shop: require('@assets/images/shop.png'),
};
import LogOut from '@assets/svg/LogOut.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';

export const CustomDrawer = (props: any) => {
  const navigation = props.navigation;
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { language, setLanguage, strings } = useLanguage();

  useEffect(() => {
    if (!language) {
      setLanguage('en');
    }
  }, [language]);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate(navigationStrings.LOGIN_SIGNUP);
  };

  const DrawerRow = ({ title, IconPath, language, selected, onPress }: any) => (
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
        onPress={onPress}
        style={[
          language && style.LanguageButton,
          language && selected && style.selectedLanguage,
        ]}
        activeOpacity={0.4}
      >
        <Text style={style.drawerText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  const ProfileBox = ({ title, IconPath, navString }: any) => (
    <View style={{ alignItems: 'center', gap: moderateScale(5) }}>
      <TouchableOpacity
        style={style.profileBoxStyle}
        onPress={() =>
          navString &&
          navigation.navigate(navigationStrings.BOTTOM_TABS, {
            screen: navString,
          })
        }
      >
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

  const style = useMemo(
    () =>
      StyleSheet.create({
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
          fontSize: Sizes.font_12,
        },
        LineStyle: {
          width: '100%',
          marginEnd: Sizes.mr_10,
          borderWidth: 0.5,
        },
        textLineStyle: {
          fontSize: Sizes.font_10,
        },
        profileBoxStyle: {
          width: Sizes.w_50,
          height: Sizes.h_50,
          marginRight: Sizes.mr_10,
          borderRadius: Sizes.rd_10,
          alignItems: 'center',
        },
        profileBoxText: {
          fontSize: Sizes.font_10,
        },
        drawerStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: Sizes.mr_8,
          gap: Sizes.gap_10,
        },
        drawerImageStyle: {
          width: Sizes.w_20,
          height: Sizes.h_20,
        },
        drawerText: {
          fontSize: Sizes.font_12,
        },
        LanguageContainer: {
          flexDirection: 'row',
          gap: Sizes.mr_10,
        },
        row: {
          paddingVertical: Sizes.pd_12,
          paddingHorizontal: Sizes.pd_16,
        },

        selectedRow: {
          backgroundColor: colors.primary,
          borderRadius: Sizes.rd_8,
        },
        LanguageButton: {
          justifyContent: 'center',
          alignItems: 'center',
          width: Sizes.w_60,
          height: Sizes.h_30,
          borderWidth: 0.5,
          borderRadius: Sizes.rd_8,
        },
        selectedLanguage: {
          backgroundColor: colors.primary,
          borderRadius: Sizes.rd_6,
        },
        LanguageButtonSelected: {
          backgroundColor: colors.brand_blue,
          borderColor: colors.brand_blue,
        },
        LogoutContainer: {
          height: Sizes.h_40,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: colors.LogOutBg,
          borderRadius: Sizes.rd_8,
          marginVertical: Sizes.mr_10,
          gap: Sizes.gap_6,
          paddingHorizontal: Sizes.pd_10,
        },
        LogoutText: {
          color: colors.LogOutText,
          fontWeight: '400',
        },
      }),
    [],
  );
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingTop: Sizes.pd_10 }}
      automaticallyAdjustContentInsets={false}
    >
  
      <View style={style.header}>
        <View style={style.subHeader}>
          <User width={Sizes.w_24} height={Sizes.w_24} />
          <View style={{ marginHorizontal: moderateScale(10) }}>
            <View>
              {user.isLoggedIn ? (
                <Text>{user.mobile}</Text>
              ) : (
                <>
                  <Text>{strings.HEY_THERE}</Text>
                  <TouchableOpacity
                    style={style.subTextHeader}
                    onPress={() =>
                      navigation.navigate(navigationStrings.LOGIN_SIGNUP)
                    }
                  >
                    <Text style={style.loginSignupStyle}>
                      {strings.LOGIN_SIGNUP}
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Close width={Sizes.w_22} height={Sizes.h_22} />
        </TouchableOpacity>
      </View>

      <Line
        text={strings.SHOP_IN}
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />

      <DrawerRow title={strings.MEN} IconPath={icons.men} />
      <DrawerRow title={strings.WOMEN} IconPath={icons.women} />

      <Line
        text={strings.ENGAGE}
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />
      <DrawerRow title={strings.FIND_STORE} IconPath={icons.shop} />
      <Line
        text={strings.LANGUAGE}
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />
      <View style={style.LanguageContainer}>
        <DrawerRow
          title={strings.ENGLISH}
          language
          selected={language === 'en'}
          onPress={() => setLanguage('en')}
        />
        <DrawerRow
          title={strings.ARABIC}
          language
          selected={language === 'ar'}
          onPress={() => setLanguage('ar')}
        />
      </View>
      <Line
        text={strings.MY_PROFILE}
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />

     
      <View style={{ flexDirection: 'row' }}>
        <ProfileBox
          title={strings.MY_ACCOUNT}
          IconPath={icons.myAccount}
          navString={navigationStrings.PROFILE_STACK}
        />
        <ProfileBox title={strings.MY_ORDERS} IconPath={icons.delivery} />
        <ProfileBox title={strings.WALLET} IconPath={icons.wallet} />
        <ProfileBox title={strings.WISHLIST} IconPath={icons.wishlist} />
      </View>
      <Line
        text={strings.CONTACT_US}
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />
   
      <DrawerRow title={strings.HELP_SUPPORT} />
      <DrawerRow title={strings.FEEDBACK} />

      <Line
        text={strings.ABOUT_US}
        style={style.LineStyle}
        textStyle={style.textLineStyle}
      />

      <DrawerRow title={strings.OUR_STORY} />
      <DrawerRow title={strings.FEEDBACK} />

      <TouchableOpacity
        style={style.LogoutContainer}
        activeOpacity={0.5}
        onPress={handleLogout}
      >
        <LogOut
          width={25}
          height={25}
          style={{
            transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
          }}
        />
        <Text style={style.LogoutText}>{strings.LOGOUT}</Text>
      </TouchableOpacity>

      <Text style={{ color: colors.lightGray }}>{strings.APP_VERSION}</Text>
    </DrawerContentScrollView>
  );
};
