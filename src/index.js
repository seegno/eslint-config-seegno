/**
 * Export `seegno` shared configuration preset.
 */

module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
    'jest',
    'new-with-error',
    'react-hooks',
    'react',
    'sort-class-members',
    'sort-destructure-keys',
    'sort-imports-es6',
    'sql-template',
    'switch-case',
    'prettier'
  ],
  root: true,
  rules: {
    'accessor-pairs': 'error',
    'block-scoped-var': 'error',
    camelcase: 'off',
    'capitalized-comments': [
      'error',
      'always',
      {
        ignoreConsecutiveComments: true
      }
    ],
    complexity: 'off',
    'consistent-return': 'off',
    'consistent-this': ['error', 'self'],
    curly: 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'smart'],
    'flowtype/define-flow-type': 'error',
    'flowtype/no-dupe-keys': 'error',
    'flowtype/require-valid-file-annotation': ['error', 'always'],
    'flowtype/sort-keys': 'error',
    'flowtype/use-flow-type': 'error',
    'func-names': 'off',
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],
    'id-length': [
      'error',
      {
        exceptions: ['_', 'e', 'i']
      }
    ],
    'id-match': [
      'error',
      '^_$|^[a-zA-Z][a-zA-Z0-9]*$|^[A-Z][_A-Z0-9]+[A-Z0-9]$',
      {
        onlyDeclarations: true,
        properties: true
      }
    ],
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'lines-around-comment': 'off',
    'max-depth': 'error',
    'max-nested-callbacks': 'off',
    'max-params': ['error', 4],
    'new-cap': 'error',
    'new-with-error/new-with-error': 'error',
    'newline-before-return': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'off',
    'no-cond-assign': ['error', 'always'],
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-label': 'off',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-iterator': 'error',
    'no-label-var': 'off',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-mixed-requires': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-restricted-modules': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-sync': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unexpected-multiline': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'operator-assignment': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var']
      }
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        jsxSingleQuote: true,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none'
      }
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    radix: 'error',
    'react/display-name': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        children: 'ignore',
        props: 'always'
      }
    ],
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        groups: {
          initialization: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext'
          ],
          lifecycle: [
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ]
        },
        order: [
          'static-methods',
          'initialization',
          'everything-else',
          '/^handle.+$/',
          'lifecycle',
          '/^render.+$/',
          'render'
        ]
      }
    ],
    'react/sort-prop-types': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'require-await': 'error',
    'require-yield': 'error',
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      {
        caseSensitive: true
      }
    ],
    'sort-imports-es6/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        natural: true
      }
    ],
    'spaced-comment': 'error',
    'sql-template/no-unsafe-query': 'error',
    strict: 'off',
    'switch-case/newline-between-switch-case': [
      'error',
      'always',
      { fallthrough: 'never' }
    ],
    'valid-jsdoc': 'error',
    'vars-on-top': 'error',
    yoda: 'error'
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    },
    react: {
      version: 'detect'
    }
  }
};
