module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'react-native', 'react-hooks'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 2,
    'react/jsx-no-bind': 'off',
    'react/jsx-no-duplicate-props': 2,
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
  },
  globals: {
    fetch: false,
    it: false,
    expect: false,
    describe: false,
  },
};
