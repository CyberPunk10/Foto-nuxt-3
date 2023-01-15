module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: [2, 'always'],
    // eqeqeq: 'off', // Require the use of === and !==
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': [2, 'always-multiline'],
    'space-before-function-paren': [2, {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'arrow-parens': [2, 'always'],
    // 'no-return-await': 'off',
  },
};
