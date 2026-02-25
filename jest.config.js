
module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'], 
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-redux|@react-navigation|@react-navigation/drawer|react-native-gesture-handler|react-native-linear-gradient|react-native-size-matters|react-native-drawer-layout|react-native-reanimated|react-native-worklets)/)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|ttf|otf)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
  },

};