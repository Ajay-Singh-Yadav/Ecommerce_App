import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
  I18nManager,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackArrow from '@assets/svg/BackArrow.svg';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationStrings from '@navigation/navigationStrings';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@redux/reducer/slices/userSlice';
import { RootState } from '@redux/store';
import { useLanguage } from '@locales/useLanguage';

const LoginSignup = ({}) => {
  const navigation = useNavigation<any>();
    const { language, strings } = useLanguage();

  const dispatch = useDispatch();

  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const user = useSelector((state: RootState) => state.user);

  console.log('mobile:', user.mobile);
  console.log('userId:', user.userId);
  console.log('isLoggedIn:', user.isLoggedIn);

  const sendOTP = () => {
    setOtpSent(true);
  };

  const verifyOTP = () => {
    if (otp === '1234') {
      let userId = user?.userId;

      if (!userId || user.mobile !== phone) {
        userId = 'user_' + Date.now();
      }
      dispatch(
        loginUser({
          mobile: phone,
          userId,
        }),
      );
      // navigation.goBack();

      navigation.navigate(navigationStrings.DRAWER, {
        screen: navigationStrings.BOTTOM_TABS,
        params: {
          screen: navigationStrings.PROFILE_STACK,
        },
      });
    } else {
      Alert.alert('Invalid OTP');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('@assets/images/LoginImage.png')}
          style={styles.banner}
        >
          <TouchableOpacity
            style={styles.BackIcon}
            onPress={() => navigation.goBack()}
          >
            <BackArrow
              width={20}
              height={20}
              style={{
                transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
              }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {/* Card */}

      <View style={styles.card}>
        <Text style={styles.title}>{strings.LOGIN_SIGNUP}</Text>
        <Text style={styles.subtitle}>
         {strings.JOIN_US}
        </Text>

        <View style={styles.inputWrapper}>
          <Text style={styles.flag}>🇮🇳 +91</Text>
          <TextInput
            placeholder={strings.ENTER_NUMBER}
            placeholderTextColor={colors.ArsenicBlack}
            style={styles.input}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        {otpSent && (
          <View style={styles.otpWrapper}>
            <TextInput
              placeholder={strings.ENTER_OTP}
              placeholderTextColor={colors.ArsenicBlack}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={6}
              value={otp}
              onChangeText={setOtp}
            />
          </View>
        )}
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={!otpSent ? sendOTP : verifyOTP}
        >
          <Text style={styles.continueText}>
           {!otpSent ? strings.CONTINUE : strings.VERIFY_OTP}
          </Text>
        </TouchableOpacity>
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialText}>{strings.GOOGLE}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialText}>{strings.FACEBOOK}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.terms}>
          {strings.BY_CREATING}
          <Text style={styles.link}> T&C </Text>
          and
          <Text style={styles.link}> {strings.POLICY}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    width: '100%',
    height: Sizes.h_280,
  },
  banner: {
    width: '100%',
    height: Sizes.h_300,
    resizeMode: 'contain',
  },
  BackIcon: {
    width: Sizes.w_30,
    height: Sizes.h_30,
    borderRadius: Sizes.circle,
    backgroundColor: colors.ButtonGray,
    alignItems: 'center',
    justifyContent: 'center',
    margin: Sizes.mr_10,
  },

  card: {
    flex: 1,

    backgroundColor: colors.white,
    borderTopLeftRadius: Sizes.rd_20,
    borderTopRightRadius: Sizes.rd_20,
    padding: Sizes.pd_16,
  },

  title: {
    fontSize: Sizes.font_16,
    fontWeight: '600',
  },

  subtitle: {
    fontSize: Sizes.font_12,
    color: colors.ButtonGray,
    marginTop: Sizes.mr_4,
    marginBottom: Sizes.mr_14,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: Sizes.rd_8,
    paddingHorizontal: Sizes.pd_10,
    height: Sizes.h_48,
  },

  flag: {
    marginRight: Sizes.mr_8,
    fontSize: Sizes.font_12,
  },

  input: {
    flex: 1,
    fontSize: Sizes.font_12,
  },

  continueBtn: {
    marginTop: Sizes.mr_14,
    backgroundColor: '#ddd',
    height: Sizes.h_48,
    borderRadius: Sizes.rd_8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  continueText: {
    fontSize: Sizes.font_13,
    color: '#666',
    fontWeight: '600',
  },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Sizes.mr_20,
  },

  socialBtn: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: Sizes.rd_8,
    height: Sizes.h_44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialText: {
    fontSize: Sizes.font_12,
    fontWeight: '600',
  },

  terms: {
    marginTop: Sizes.mr_18,
    fontSize: Sizes.font_10,
    color: '#777',
    textAlign: 'center',
  },

  link: {
    color: '#2a7de1',
  },
  otpWrapper: {
    marginTop: Sizes.mr_12,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: Sizes.rd_8,
    height: Sizes.h_48,
    justifyContent: 'center',
    paddingHorizontal: Sizes.pd_10,
  },

  otpInput: {
    fontSize: Sizes.font_14,
  },
});
