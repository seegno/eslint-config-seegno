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
  const linter = new CLIEngine({
    configFile: path.join(__dirname, '..', 'src', 'index.js')
  });

  it('should not generate any violation for correct code', () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');

    linter.executeOnFiles([source]).errorCount.should.equal(0);
  });

  it('should generate violations for environment-specific rules', () => {
    const source = path.join(__dirname, 'fixtures', 'environment.js');

    Array.from(
      linter
        .executeOnFiles([source])
        .results[0].messages.map(violation => violation.ruleId)
    ).should.eql([
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier'
    ]);
  });

  it('should generate violations for incorrect code', () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');

    Array.from(
      linter
        .executeOnFiles([source])
        .results[0].messages.map(violation => violation.ruleId)
    ).should.eql([
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'capitalized-comments',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'consistent-this',
      'curly',
      'prettier/prettier',
      'dot-notation',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'id-match',
      'prettier/prettier',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'jest/no-focused-tests',
      'jest/no-identical-title',
      'prettier/prettier',
      'prettier/prettier',
      'no-new',
      'new-cap',
      'new-with-error/new-with-error',
      'newline-before-return',
      'prettier/prettier',
      'no-class-assign',
      'no-console',
      'no-const-assign',
      'no-constant-condition',
      'prettier/prettier',
      'no-dupe-class-members',
      'prettier/prettier',
      'no-empty',
      'no-labels',
      'no-labels',
      'prettier/prettier',
      'no-multi-str',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'no-this-before-super',
      'prettier/prettier',
      'no-undef',
      'prettier/prettier',
      'no-underscore-dangle',
      'prettier/prettier',
      'no-unused-vars',
      'prettier/prettier',
      'one-var',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'padding-line-between-statements',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'quotes',
      'prettier/prettier',
      'prettier/prettier',
      'sort-imports-es6/sort-imports-es6',
      'sort-keys',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'spaced-comment',
      'sql-template/no-unsafe-query',
      'switch-case/newline-between-switch-case',
      'no-fallthrough',
      'switch-case/newline-between-switch-case',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'sort-destructure-keys/sort-destructure-keys',
      'yoda',
      'react-hooks/exhaustive-deps',
      'react-hooks/exhaustive-deps',
      'react-hooks/exhaustive-deps',
      'react-hooks/exhaustive-deps',
      'react-hooks/exhaustive-deps',
      'react-hooks/rules-of-hooks',
      'react-hooks/rules-of-hooks',
      'react-hooks/rules-of-hooks',
      'react-hooks/rules-of-hooks',
      'prettier/prettier',
      'react/jsx-curly-brace-presence',
      'prettier/prettier',
      'react/jsx-no-literals',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'prettier/prettier',
      'react/prefer-stateless-function',
      'prettier/prettier',
      'prettier/prettier'
    ]);
  });
});
