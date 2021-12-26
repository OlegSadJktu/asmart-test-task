module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'prettier',
    'standard',
    // 'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: ['error', 'single'],
    'no-multi-spaces': 'error',
    semi: ['error', 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'react/prop-types': 0,
    'multiline-ternary': 0,
    indent: ['error', 4],
  },
  // 'prettier/prettier': [
  //   'error',
  //   {
  //     trallingComma: 'all'
  //   }
  //   ]
};
