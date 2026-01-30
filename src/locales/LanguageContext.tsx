import React, { createContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import LocalizedStrings from 'react-native-localization';
import en from './en';
import ar from './ar';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language, restart?: boolean) => void;
  strings: typeof strings;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  strings: new LocalizedStrings({ en, ar }),
});

const strings = new LocalizedStrings({
  en: en,
  ar: ar,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLangState] = useState<Language>('en');
  const didRestart = useRef(false);

  useEffect(() => {
    (async () => {
      const storedLang = await AsyncStorage.getItem('appLang');
      const lang: 'en' | 'ar' = storedLang === 'ar' ? 'ar' : 'en';
      strings.setLanguage(lang);
      setLangState(lang);

      const isRTL = lang === 'ar';
      if (I18nManager.isRTL !== isRTL && !didRestart.current) {
        didRestart.current = true;

        I18nManager.forceRTL(isRTL);
        // await AsyncStorage.setItem('shouldRestoreRoute', 'true');
        RNRestart.Restart();
      }
    })();
  }, []);

  const setLanguage = async (lang: 'en' | 'ar', restart = false) => {
    await AsyncStorage.setItem('appLang', lang);
    strings.setLanguage(lang);
    setLangState(lang);

    const isRTL = lang === 'ar';
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);

      if (restart && !didRestart.current) {
        didRestart.current = true;
                // await AsyncStorage.setItem('shouldRestoreRoute', 'true');
        setTimeout(() => RNRestart.Restart(), 300);
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, strings }}>
      {children}
    </LanguageContext.Provider>
  );
};
