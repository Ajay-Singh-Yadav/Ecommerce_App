import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';

import LocalizedStrings from 'react-native-localization';
import en from './en';
import ar from './ar';

export type Language = 'en' | 'ar';

const strings = new LocalizedStrings({
  en,
  ar,
});

type StringsType = typeof strings;
// type StringsType = InstanceType<typeof LocalizedStrings>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  strings: StringsType;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  strings,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLangState] = useState<Language>('en');

  useEffect(() => {
    initLanguage();
  }, []);

  const initLanguage = async () => {
    const storedLang = await AsyncStorage.getItem('appLang');
    const lang: Language = storedLang === 'ar' ? 'ar' : 'en';

    applyLanguage(lang, false);
  };

  const applyLanguage = async (lang: Language, shouldRestart = true) => {
    await AsyncStorage.setItem('appLang', lang);

    strings.setLanguage(lang);
    setLangState(lang);

    const isRTL = lang === 'ar';

    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);

      if (shouldRestart) {
        setTimeout(() => RNRestart.restart(), 200);
      }
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        strings,
        setLanguage: applyLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};