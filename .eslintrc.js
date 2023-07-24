module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  globals: {
    'IS_DEVELOPMENT': 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
}
