import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const useLanguage = () => {
  const { language, strings, setLanguage } = useContext(LanguageContext);
  return { language, strings, setLanguage };
};
