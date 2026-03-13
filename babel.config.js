module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          // Assets
          '@assets': './src/assets',
          'moti/skeleton': 'moti/skeleton/react-native-linear-gradient',

          // App structure
          '@constants': './src/constants',
          '@data': './src/data',
          '@global': './src/globalComponents',
          '@locales': './src/locales',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
         '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    ],

    'react-native-reanimated/plugin',
  ],
};
