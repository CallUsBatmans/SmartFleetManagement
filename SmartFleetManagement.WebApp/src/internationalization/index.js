import en from './en.json';
import ro from './ro.json';

export const defaultLocale = process.env.REACT_APP_DEFAULT_LOCALE;

export const translations = {
  english: {
    code: 'en',
    name: 'English',
    resources: en
  },
  romanian: {
    code: 'ro',
    name: 'Română',
    resources: ro
  }
};
