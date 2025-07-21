import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

module.exports = {
  ignores: ['dist'],
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    import: importPlugin,
  },
  rules: {
    ...importPlugin.configs.react.rules,
    ...reactHooks.configs.recommended.rules,
    'no-empty-pattern': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          {
            pattern: '@@*/**',
            group: 'internal',
            patternOptions: { partial: true, nocomment: true },
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
};
