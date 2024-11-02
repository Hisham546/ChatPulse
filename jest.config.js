
module.exports = {
  preset: 'react-native',
  "setupFiles": ["<rootDir>/jest/setup.js"],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',// Add this line if using Babel
    '^.+\\.(ts|tsx)$': 'babel-jest',

  },

  "transformIgnorePatterns": [
    
   // "node_modules/(?!(jest-)?react-native(-.*)?|@react-native(-community)?|react-native-calendars|react-native-swipe-gestures|@rneui)"
   'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
  ],
  "testPathIgnorePatterns": ['/node_modules/', '<rootDir>/__tests__/otpInput-test.js'],


};
