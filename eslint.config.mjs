import js from '@eslint/js'
import expoConfig from 'eslint-config-expo/flat.js'
import prettierConfig from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'
import { configs as tseslintConfigs } from 'typescript-eslint'

export default defineConfig([
  {
    ignores: ['node_modules/**', '.expo/**', 'dist/**', 'web-build/**'],
  },
  js.configs.recommended,
  expoConfig,
  tseslintConfigs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
  {
    rules: {
      'default-case': 'warn',
      'no-console': 'warn',
      'no-alert': 'warn',
      'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
      'no-var': 'warn',
      'object-shorthand': 'warn',
      'prefer-const': 'warn',
      'no-else-return': 'warn',
      eqeqeq: 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  prettierConfig,
])
