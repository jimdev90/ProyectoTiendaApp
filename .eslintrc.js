module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
  },
  'overrides': [
    {
      'files': ['**/*.js?(x)'],
      'rules': {
        // ******** add ignore rules here *********
        'react/no-unescaped-entities': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
