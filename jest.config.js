module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest.setup.js',
  ],
  // setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
transformIgnorePatterns: [
  'node_modules/(?!(react-native|@react-native|react-native-gesture-handler|react-native-size-matters|@react-navigation|react-native-linear-gradient)/)',
],



  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/__mocks__/svgMock.js',
  },
};
