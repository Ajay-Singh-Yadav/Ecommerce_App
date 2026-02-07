import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Easing,
} from 'react-native';

import Header from '@global/Header';
import { br, rh, rpm, rs, rw } from '@theme/responsive';
import colors from '@theme/colors';
import { useLanguage } from '@locales/useLanguage';
import { Animated } from 'react-native';

const ProfileScreen = () => {
  const { language, setLanguage, strings } = useLanguage();
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    slideAnim.setValue(language === 'en' ? 0 : 1);
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';

    Animated.timing(slideAnim, {
      toValue: newLang === 'en' ? 0 : 1,
      duration: 220,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        setLanguage(newLang, true);
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        logo={true}
        // search={true}
        bell={true}
        heart={true}
        bag={true}
        subHeaderStyle={styles.leftRightContainer}
      />
      <ScrollView style={styles.container}>
        {/* Profile Info */}
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>J</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Ajay</Text>
            <Text style={styles.email}>example@gmail.com</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.edit}>{strings.EDIT}</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionRow}>
          {renderAction(strings.ORDERS)}
          {renderAction(strings.WALLET)}
          {/* {renderAction(strings.PAYMENTS)} */}

        </View>

        {/* Sections */}
        <Section title={strings.MANAGE_ADDRESSES} subtitle={strings.MANAGE_ADDRESSES} />
        <SectionHeader title={strings.LANGUAGE} />
        <View style={styles.languageWrapper}>
          <Animated.View
            style={[
              styles.languageIndicator,
              {
                transform: [
                  {
                    translateX: slideAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, rw(90)],
                    }),
                  },
                ],
              },
            ]}
          />

          <TouchableOpacity style={styles.languageTab} onPress={toggleLanguage}>
            <Text
              style={[
                styles.languageText,
                language === 'en' && styles.languageTextActive,
              ]}
            >
              English
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.languageTab} onPress={toggleLanguage}>
            <Text
              style={[
                styles.languageText,
                language === 'ar' && styles.languageTextActive,
              ]}
            >
              {strings.ARABIC}
            </Text>
          </TouchableOpacity>
        </View>

        <SectionHeader title={strings.CONTACT_US_SECTION} />
        <Section title={strings.HELP_SUPPORT} />
        <Section title={strings.BECOME_SELLER} />
        <Section title={strings.FEEDBACK_SUGGESTION} />

        <SectionHeader title={strings.ABOUT_US_SECTION} />
        <Section title={strings.OUR_STORY} />
        <Section title={strings.FANBOOK} />
      </ScrollView>
    </View>
  );
};

const renderAction = (label: string) => (
  <TouchableOpacity style={styles.actionBox}>
    <View style={styles.iconPlaceholder} />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

const SectionHeader = ({ title }: { title: string }) => (
  <Text style={styles.sectionHeader}>{title}</Text>
);

const Section = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <TouchableOpacity style={styles.listItem}>
    <View>
      <Text style={styles.listTitle}>{title}</Text>
      {subtitle && <Text style={styles.listSubtitle}>{subtitle}</Text>}
    </View>
    <Text style={styles.arrow}>›</Text>
  </TouchableOpacity>
);

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || '#F7F7F7',
  },
  leftRightContainer: {
    marginTop: rpm(40),
  },

  header: {
    height: rh(70),
    backgroundColor: colors.primary || '#FFD633',
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rpm(16),
    paddingVertical: rpm(14),
    backgroundColor: colors.white,
  },

  avatar: {
    height: rw(48),
    width: rw(48),
    borderRadius: br(24),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: rw(12),
  },

  avatarText: {
    fontSize: rs(18),
    fontWeight: 'bold',
    color: colors.black,
  },

  name: {
    fontSize: rs(16),
    fontWeight: '600',
    color: colors.textPrimary,
  },

  email: {
    fontSize: rs(13),
    color: colors.textSecondary || '#777',
    marginTop: rh(2),
  },

  edit: {
    fontSize: rs(14),
    color: colors.link || '#2E7DFF',
    fontWeight: '600',
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    paddingVertical: rh(16),
  },

  actionBox: {
    alignItems: 'center',
    width: rw(90),
  },

  iconPlaceholder: {
    height: rw(40),
    width: rw(40),
    backgroundColor: colors.primary,
    borderRadius: br(8),
    marginBottom: rh(6),
  },

  actionText: {
    fontSize: rs(13),
    color: colors.textPrimary,
  },
  languageWrapper: {
    flexDirection: 'row',
    width: rw(180),
    height: rh(38),
    alignSelf: 'flex-start',
    marginHorizontal: rw(16),
    backgroundColor: colors.neutral_0,
    borderRadius: br(20),
    position: 'relative',
    overflow: 'hidden',
    marginBottom: rh(12),
  },

  languageIndicator: {
    position: 'absolute',
    width: rw(90),
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: br(20),
  },

  languageTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

  languageText: {
    fontSize: rs(13),
    color: colors.textSecondary,
    fontWeight: '500',
  },

  languageTextActive: {
    color: colors.black,
    fontWeight: '600',
  },

  sectionHeader: {
    marginTop: rh(10),
    marginBottom: rh(8),
    marginHorizontal: rw(16),
    fontSize: rs(12),
    color: colors.textMuted || '#999',
    fontWeight: '600',
  },

  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: rw(16),
    paddingVertical: rh(14),
    borderBottomWidth: rs(1),
    borderBottomColor: colors.border || '#EEE',
  },

  listTitle: {
    fontSize: rs(15),
    color: colors.textPrimary,
  },

  listSubtitle: {
    fontSize: rs(12),
    color: colors.textSecondary || '#888',
    marginTop: rh(2),
  },

  arrow: {
    fontSize: rs(22),
    color: colors.textMuted || '#999',
  },
});
