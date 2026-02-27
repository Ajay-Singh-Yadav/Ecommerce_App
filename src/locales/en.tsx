const en = {
  PROFILE_TITLE: 'Profile',
  EDIT: 'Edit',

  // header
  HEY_THERE: 'Hey There!',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
  LOGIN_SIGNUP: 'Login / Signup',

  // shop
  SHOP_IN: 'SHOP IN',
  MEN: 'Men',
  WOMEN: 'Women',

  ENGAGE: 'ENGAGE',
  FIND_STORE: 'Find a Store',
  LANGUAGE: 'Language',
  ARABIC: 'Arabic',
  ENGLISH: 'English',

  // profile
  MY_PROFILE: 'MY PROFILE',
  MY_ACCOUNT: 'My Account',
  MY_ORDERS: 'My Orders',
  WALLET: 'My Wallet',
  WISHLIST: 'Wishlist',

  // contact
  CONTACT_US: 'CONTACT US',
  HELP_SUPPORT: 'Help & Support',
  FEEDBACK: 'Feedback & Suggestion',

  // about
  ABOUT_US: 'ABOUT US',
  OUR_STORY: 'Our Story',
  FANBOOK: 'Fanbook',
  DELIVERY: 'Delivery to',


  //TagLines
  TAGLINE_1: 'Bewakoof Vault',
  TAGLINE_2: 'Unlock All New styles',

  APP_VERSION: 'App version',
} as const;

export type TranslationKeys = keyof typeof en;
export default en;
