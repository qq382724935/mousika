module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-console": "off",
    "linebreak-style": [0, "error", "windows"],
    "indent": [1, 4],
    "import/no-dynamic-require": 0,
    "global-require": "off",
    "no-param-reassign": 0,
    "consistent-return": 0,
    "no-unused-expressions": 0,
  },
};
