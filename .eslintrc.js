module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'next',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '@/lib/**/*',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/components/**/*',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/server-components/**/*',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/models/**/*',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: 'src/**/*',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '**/*.+(svg|png|jpg|jpeg|mp3|mp4|tiff|webp|gif)',
            group: 'sibling',
            position: 'after'
          },
          {
            pattern: './*.scss',
            group: 'sibling',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc'
        }
      }
    ],
    'prettier/prettier': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/newline-after-import': 'error',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-no-bind': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/interactive-supports-focus': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-unused-prop-types': 'warn'
  }
};
