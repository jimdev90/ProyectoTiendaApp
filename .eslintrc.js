module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }]
  },
  'overrides': [
    {
      'files': ['**/*.js?(x)'],
      'rules': {
        // ******** add ignore rules here *********
        'react/no-unescaped-entities': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off'
      }
    }
  ]
};
