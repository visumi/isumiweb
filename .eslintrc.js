module.exports = {
  plugins: [
    '@typescript-eslint', 
    'security',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  extends: [
    'airbnb-typescript',
    'plugin:security/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: {
    browser: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-prototype-builtins': 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'import/extensions': 'off',
    'import/no-named-as-default': 'off',
    'no-new': 'off',
    'object-curly-newline': [
      'error',
      {
        multiline: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'no-nested-ternary': 'off',
    'security/detect-object-injection': 'off',
    'security/detect-non-literal-fs-filename': 'off',
  },
};