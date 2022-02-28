module.exports = {
  extends: [require.resolve('./react')],
  settings: {
    // ESLint doesn't find React Native components
    // Remove this setting when this issue is fixed.
    // https://github.com/facebook/react-native/issues/28549
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
};
