module.exports = {
  parserOptions: {
    ecmaVersion: 2022
  },
  env: {
    node    : true,
    browser : true
  },
  globals: {
    chrome     : true,
    globalThis : false // means it's not writable
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
  ],
  rules: {
    'key-spacing': [
      'error',
      {
        'align': {
          'afterColon'  : true,
          'beforeColon' : true,
          'on'          : 'colon'
        }
      }
    ],
    'quotes': [
      'error',
      'single',
      { 'allowTemplateLiterals': true }
    ],
    'semi'                             : ['error', 'always'],
    'vue/html-closing-bracket-newline' : ['error', {
      'multiline'  : 'never',
      'singleline' : 'never'
    }],
    'vue/max-attributes-per-line': ['error', {
      'multiline': {
        'max': 4
      },
      'singleline': {
        'max': 4
      },
    }],
    'vue/static-class-names-order' : 'error',
    'indent'                       : ['error', 2],
    'no-unused-vars'               : [
      'error',
      {
        'vars'               : 'all',
        'args'               : 'after-used',
        'ignoreRestSiblings' : true,
        'argsIgnorePattern'  : '^_',
        'varsIgnorePattern'  : '^_'
      }
    ]
  }
};