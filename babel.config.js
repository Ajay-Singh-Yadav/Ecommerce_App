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

          // App structure
          '@conschatctants': './src/constant',
          '@data': './src/data',
          '@global': './src/globalComponents',
          '@locales': './src/locales',
          '@navigation': './src/navihation',
          '@redux': './src/redux',
          '@screens': './src/secreens',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    ],

    // Keep last if enabled later
    // 'react-native-reanimated/plugin',
  ],
};
