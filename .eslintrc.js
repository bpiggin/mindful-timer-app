module.exports = {
  root: true,
  plugins: ['react-native'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    'react/prop-types': 'off',
    'react-native/sort-styles': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prefer-stateless-function': 'warn',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ['warn', 'always'],
    'max-lines': [
      'warn',
      { max: 150, skipBlankLines: true, skipComments: true },
    ],
    'max-lines-per-function': [
      'warn',
      { max: 50, skipBlankLines: true, skipComments: true },
    ],
    complexity: ['warn', 6],
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'no-case-declarations': 'warn',
    'no-async-promise-executor': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-raw-text': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
  env: {
    'react-native/react-native': true,
  },
  // Glob based definitions
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.test.ts', '**/*.test.tsx'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'max-lines-per-function': 'off',
      },
    },
  ],
};
