module.exports = {
  root: true,
  env: {
    es2020: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  parserOptions: { project: './tsconfig.json' },
  rules: {
    'array-callback-return': 'error',
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': 'error',
    'require-atomic-updates': 'error',

    'accessor-pairs': 'error',
    'arrow-body-style': 'error',
    camelcase: 'error',
    'class-methods-use-this': 'error',
    complexity: 'error',
    'consistent-return': 'error',
    curly: ['error', 'all'],
    'default-case': 'error',
    'default-case-last': 'error',
    'dot-location': ['error', 'property'],
    eqeqeq: 'error',
    'grouped-accessor-pairs': 'error',
    'id-length': ['error', { min: 3 }],
    'max-depth': ['error', 4],
    'max-lines-per-function': ['error', 50],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 3],
    'new-cap': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-labels': 'error',
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-throw-literal': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    radix: 'error',
    'quote-props': ['error', 'as-needed'],
    'spaced-comment': ['error', 'always'],
    'symbol-description': 'error',

    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'function-paren-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    'linebreak-style': ['error', 'unix'],
    'func-call-spacing': 'error',
    'max-len': ['error', {
      code: 200,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'max-statements-per-line': 'error',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 3 }],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', { multiline: true }],
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'rest-spread-spacing': 'error',
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': 'error',
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-iife': ['error', 'inside'],

    'import/newline-after-import': 'error',
    'import/order': ['error', {
      'newlines-between': 'never',
      alphabetize: { order: 'asc' },
    }],

    '@typescript-eslint/brace-style': ['error', '1tbs'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/no-extra-parens': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    '@typescript-eslint/space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    '@typescript-eslint/space-infix-ops': 'error',
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: '**/*.test.*',
      rules: {
        'max-depth': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off',
        'max-len': 'off',
      },
    },
  ],
};
