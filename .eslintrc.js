module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  extends: [
    'plugin:vue/vue3-essential',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    camelcase: 'off',
    'import/no-named-as-default-member': 'off',
    'no-alert': 'off',
  },
};
