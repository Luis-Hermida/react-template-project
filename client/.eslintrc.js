module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks'],
  settings: {
    react: {
      pragma: 'createElement',
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/__stories__/**', '**/__tests__/**', '**/__mocks__/**', 'src/testUtil.tsx'],
    },
  ],
  rules: {
    '@typescript-eslint/no-extraneous-class': 'warn',
    '@typescript-eslint/no-this-alias': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-unsafe': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'dot-notation': 'error',
    'no-var': 'error',
    'no-constant-condition': 'error',
    'no-console': 1,
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-restricted-globals': [
      'error',
      {
        name: 'event',
        message: `The 'event' reference here is global. You probably want to use a local parameter.`,
      },
      {
        name: 'length',
        message: `The 'length' reference here is global. You probably want to use a local parameter.`,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          // importing from a js file is usually a mistake
          '*.js',
        ],
      },
    ],
    'no-restricted-properties': [
      'error',
      {
        property: 'trimStart',
        message: `trimStart isn't supported on Edge 18 + FF 60 ESR. Use trimLeft instead.`,
      },
      {
        property: 'trimEnd',
        message: `trimEnd isn't supported on Edge 18 + FF 60 ESR. Use trimRight instead.`,
      },
    ],
    'no-restricted-syntax': ['error', 'WithStatement'],
    'prefer-const': 'error',
    'no-new-wrappers': 'error',
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'spaced-comment': ['error', 'always'],
  },
};
