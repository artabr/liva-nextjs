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
  plugins: ['react', 'prettier', 'deprecated-classnames'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': 'error',
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
    'react/no-unused-prop-types': 'warn',
    'deprecated-classnames/deprecated-classnames': [
      'error',
      {
        classnames: [
          // Grid updates
          { name: 'no-gutters', replacement: 'g-0' },
          { name: 'order-6', replacement: 'order-5' },
          { name: 'order-7', replacement: 'order-5' },
          { name: 'order-8', replacement: 'order-5' },
          { name: 'order-9', replacement: 'order-5' },
          { name: 'order-10', replacement: 'order-5' },
          { name: 'order-11', replacement: 'order-5' },
          { name: 'order-12', replacement: 'order-5' },
          { name: 'media', replacement: 'd-flex' },
          { name: 'media-body', replacement: 'flex-grow-1 ms-3' },
          // Content, Reboot, etc
          { name: 'thead-light', replacement: 'table-light' },
          { name: 'thead-dark', replacement: 'table-dark' },
          { name: 'pre-scrollable', replacement: '' },
          { name: 'text-justify', replacement: '' },
          // RTL
          { name: 'ml-0', replacement: 'ms-0' },
          { name: 'ml-1', replacement: 'ms-1' },
          { name: 'ml-2', replacement: 'ms-2' },
          { name: 'ml-3', replacement: 'ms-3' },
          { name: 'ml-4', replacement: 'ms-4' },
          { name: 'ml-5', replacement: 'ms-5' },
          { name: 'ml-auto', replacement: 'ms-auto' },
          { name: 'pl-0', replacement: 'ps-0' },
          { name: 'pl-1', replacement: 'ps-1' },
          { name: 'pl-2', replacement: 'ps-2' },
          { name: 'pl-3', replacement: 'ps-3' },
          { name: 'pl-4', replacement: 'ps-4' },
          { name: 'pl-5', replacement: 'ps-5' },
          { name: 'pl-auto', replacement: 'ps-auto' },
          { name: 'mr-0', replacement: 'me-0' },
          { name: 'mr-1', replacement: 'me-1' },
          { name: 'mr-2', replacement: 'me-2' },
          { name: 'mr-3', replacement: 'me-3' },
          { name: 'mr-4', replacement: 'me-4' },
          { name: 'mr-5', replacement: 'me-5' },
          { name: 'mr-auto', replacement: 'me-auto' },
          { name: 'pr-0', replacement: 'pe-0' },
          { name: 'pr-1', replacement: 'pe-1' },
          { name: 'pr-2', replacement: 'pe-2' },
          { name: 'pr-3', replacement: 'pe-3' },
          { name: 'pr-4', replacement: 'pe-4' },
          { name: 'pr-5', replacement: 'pe-5' },
          { name: 'pr-auto', replacement: 'pe-auto' },
          // Forms
          { name: 'custom-check', replacement: 'form-check' },
          { name: 'custom-check.custom-switch', replacement: 'form-check.form-switch' },
          { name: 'custom-select', replacement: 'form-select' },
          { name: 'custom-file', replacement: '' },
          { name: 'form-file', replacement: '' },
          { name: 'form-control-file', replacement: '' },
          { name: 'form-control-range', replacement: '' },
          { name: 'input-group-append', replacement: '' },
          { name: 'input-group-prepend', replacement: '' },
          { name: 'form-group', replacement: '' },
          { name: 'form-row', replacement: '' },
          { name: 'form-inline', replacement: '' },
          // Badges
          { name: 'badge-primary', replacement: 'badge-primary' },
          { name: 'badge-secondary', replacement: 'badge-secondary' },
          { name: 'badge-success', replacement: 'badge-success' },
          { name: 'badge-danger', replacement: 'badge-danger' },
          { name: 'badge-warning', replacement: 'badge-warning' },
          { name: 'badge-info', replacement: 'badge-info' },
          { name: 'badge-light', replacement: 'badge-light' },
          { name: 'badge-dark', replacement: 'badge-dark' },
          { name: 'badge-pill', replacement: 'rounded-pill' },
          // Buttons
          { name: 'btn-block', replacement: '' },
          // Card
          { name: 'card-deck', replacement: '' },
          { name: 'card-columns', replacement: '' },
          // Close button
          { name: 'close', replacement: 'btn-close' },
          // Jumbotron
          { name: 'jumbotron-fluid', replacement: '' },
          { name: 'jumbotron', replacement: '' },
          // Tooltips
          { name: 'arrow', replacement: 'tooltip-arrow' },
          // Utilities
          { name: 'float-left', replacement: 'float-start' },
          { name: 'float-right', replacement: 'float-end' },
          { name: 'border-left', replacement: 'border-start' },
          { name: 'border-right', replacement: 'border-end' },
          { name: 'rounded-left', replacement: 'rounded-start' },
          { name: 'rounded-right', replacement: 'rounded-end' },
          { name: 'text-left', replacement: 'text-start' },
          { name: 'text-right', replacement: 'text-end' },
          { name: 'text-monospace', replacement: 'font-monospace' },
          { name: 'text-hide', replacement: '' },
          { name: 'font-weight-bold', replacement: 'fw-bold' },
          { name: 'font-weight-bolder', replacement: 'fw-bolder' },
          { name: 'font-weight-normal', replacement: 'fw-normal' },
          { name: 'font-weight-light', replacement: 'fw-light' },
          { name: 'font-weight-lighter', replacement: 'fw-lighter' },
          { name: 'rounded-sm', replacement: 'rounded-0' },
          { name: 'rounded-lg', replacement: 'rounded-3' },
          // Helpers
          { name: 'embed-responsive', replacement: 'ratio' },
          { name: 'embed-responsive-item', replacement: 'ratio' },
          { name: 'embed-responsive-21by9', replacement: 'ratio-21x9' },
          { name: 'embed-responsive-16by9', replacement: 'ratio-16x9' },
          { name: 'embed-responsive-4by3', replacement: 'ratio-4x3' },
          { name: 'embed-responsive-1by1', replacement: 'ratio-1x1' }
        ]
      }
    ]
  }
};
