import colors from '@theme/colors';
import { Sizes } from '@theme/sizes';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackArrow from '@assets/svg/BackArrow.svg';
import { useNavigation } from '@react-navigation/native';

const LoginSignup = ({}) => {

    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
  
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('@assets/images/LoginImage.png')}
          style={styles.banner}
        >
          <TouchableOpacity style={styles.BackIcon} onPress={()=> navigation.goBack()}>
            <BackArrow width={20} height={20} />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {/* Card */}

      <View style={styles.card}>
        <Text style={styles.title}>Login / Signup</Text>
        <Text style={styles.subtitle}>
          Join us now to be a part of Bewakoof® family.
        </Text>

       
        <View style={styles.inputWrapper}>
          <Text style={styles.flag}>🇮🇳 +91</Text>
          <TextInput
            placeholder="Enter Mobile Number"
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        
        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>

        
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialText}>GOOGLE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialText}>FACEBOOK</Text>
          </TouchableOpacity>
        </View>

       
        <Text style={styles.terms}>
          By creating an account or logging in, you agree with Bewakoof’s
          <Text style={styles.link}> T&C </Text>
          and
          <Text style={styles.link}> Privacy Policy</Text>
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
});
