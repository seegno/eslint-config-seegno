'use strict';

/**
 * Module dependencies.
 */

const CLIEngine = require('eslint').CLIEngine;
const path = require('path');

/**
 * Tests for `eslint-config-seegno`.
 */

describe('eslint-config-seegno', () => {
  const linter = new CLIEngine({ configFile: path.join(__dirname, '..', 'src', 'index.js') });

  it('should not generate any violation for correct code', () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');
    const results = linter.executeOnFiles([source]);

    expect(results.errorCount).toEqual(0);
  });

  it('should generate violations for environment-specific rules', () => {
    const source = path.join(__dirname, 'fixtures', 'environment.js');
    const violations = linter
      .executeOnFiles([source])
      .results[0]
      .messages
      .map(violation => violation.ruleId);

    expect(violations).toEqual([
      'linebreak-style',
      'linebreak-style',
      'linebreak-style',
      'linebreak-style',
      'eol-last'
    ]);
  });

  it('should generate violations for incorrect code', () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');
    const violations = linter
      .executeOnFiles([source])
      .results[0]
      .messages
      .reduce(
        (result, { ruleId }) => {
          result[ruleId] = (result[ruleId] || 0) + 1;

          return result;
        },
        {}
      );

    expect(violations).toEqual({
      'array-bracket-spacing': 1,
      'arrow-parens': 1,
      'brace-style': 1,
      'capitalized-comments': 1,
      'comma-dangle': 1,
      'comma-spacing': 1,
      'comma-style': 1,
      'consistent-this': 1,
      curly: 1,
      'dot-notation': 1,
      'flowtype/delimiter-dangle': 2,
      'generator-star-spacing': 5,
      'id-match': 1,
      indent: 1,
      'jest/no-disabled-tests': 9,
      'jest/no-focused-tests': 5,
      'jest/no-identical-title': 1,
      'key-spacing': 1,
      'keyword-spacing': 1,
      'mocha/no-exclusive-tests': 3,
      'new-cap': 1,
      'new-with-error/new-with-error': 1,
      'newline-before-return': 1,
      'no-class-assign': 1,
      'no-console': 1,
      'no-const-assign': 1,
      'no-constant-condition': 1,
      'no-dupe-class-members': 1,
      'no-empty': 1,
      'no-fallthrough': 1,
      'no-labels': 2,
      'no-multi-spaces': 1,
      'no-multi-str': 1,
      'no-multiple-empty-lines': 1,
      'no-new': 1,
      'no-spaced-func': 1,
      'no-this-before-super': 1,
      'no-undef': 1,
      'no-underscore-dangle': 1,
      'no-unused-vars': 2,
      'object-curly-spacing': 2,
      'one-var': 1,
      'one-var-declaration-per-line': 1,
      'operator-linebreak': 1,
      'padded-blocks': 6,
      'padding-line-between-statements': 1,
      'quote-props': 4,
      quotes: 1,
      'react/jsx-curly-brace-presence': 1,
      'react/jsx-no-literals': 1,
      'react/jsx-tag-spacing': 5,
      'react/prefer-stateless-function': 1,
      'react-hooks/exhaustive-deps': 5,
      'react-hooks/rules-of-hooks': 4,
      semi: 1,
      'semi-spacing': 2,
      'sort-destructure-keys/sort-destructure-keys': 1,
      'sort-imports-es6/sort-imports-es6': 1,
      'sort-keys': 1,
      'space-before-blocks': 1,
      'space-before-function-paren': 1,
      'space-in-parens': 2,
      'space-infix-ops': 1,
      'space-unary-ops': 1,
      'spaced-comment': 1,
      'sql-template/no-unsafe-query': 1,
      'switch-case/newline-between-switch-case': 2,
      'template-curly-spacing': 2,
      'wrap-iife': 1,
      yoda: 1
    });
  });
});
