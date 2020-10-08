'use strict';

/**
 * Module dependencies.
 */

const CLIEngine = require('eslint').CLIEngine;
const path = require('path');

/*
 * Violations count.
 */

const violationsCount = {
  'capitalized-comments': 1,
  'consistent-this': 1,
  curly: 1,
  'dot-notation': 1,
  'id-match': 1,
  'jest/no-disabled-tests': 8,
  'jest/no-focused-tests': 5,
  'jest/no-identical-title': 1,
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
  'no-multi-str': 1,
  'no-new': 1,
  'no-this-before-super': 1,
  'no-undef': 1,
  'no-underscore-dangle': 1,
  'no-unused-vars': 1,
  'one-var': 1,
  'padding-line-between-statements': 1,
  'prettier/prettier': 53,
  quotes: 1,
  'react/jsx-curly-brace-presence': 1,
  'react/jsx-no-literals': 1,
  'react/prefer-stateless-function': 1,
  'react-hooks/exhaustive-deps': 5,
  'react-hooks/rules-of-hooks': 4,
  'sort-destructure-keys/sort-destructure-keys': 1,
  'sort-imports-es6/sort-imports-es6': 1,
  'sort-keys': 1,
  'spaced-comment': 1,
  'sql-template/no-unsafe-query': 1,
  'switch-case/newline-between-switch-case': 2,
  yoda: 1
};

/**
 * Tests for `eslint-config-seegno`.
 */

describe('eslint-config-seegno', () => {
  const linter = new CLIEngine({
    configFile: path.join(__dirname, '..', 'src', 'index.js')
  });

  it('should not generate any violation for correct code', () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');
    const results = linter.executeOnFiles([source]);

    expect(results.errorCount).toEqual(0);
  });

  it('should generate violations for environment-specific rules', () => {
    const source = path.join(__dirname, 'fixtures', 'environment.js');
    const violations = linter
      .executeOnFiles([source])
      .results[0].messages.map(violation => violation.ruleId);

    expect(violations).toEqual([
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier'
    ]);
  });

  it('should generate violations for incorrect code', () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');
    const violations = linter
      .executeOnFiles([source])
      .results[0].messages.map(violation => violation.ruleId);

    Object.keys(violationsCount).forEach(rule => {
      expect(violations.filter(violation => violation === rule).length).toEqual(
        violationsCount[rule]
      );
    });
  });
});
