'use strict';

/**
 * Module dependencies.
 */

const Linter = require('eslint/lib/cli-engine');
const path = require('path');

/**
 * Tests for `eslint-config-seegno`.
 */

describe('eslint-config-seegno', () => {
  const linter = new Linter({ configFile: path.join(__dirname, '..', 'src', 'index.js') });

  it('should not generate any violation for correct code', () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');

    linter.executeOnFiles([source]).errorCount.should.equal(0);
  });

  it('should generate violations for environment-specific rules', () => {
    const source = path.join(__dirname, 'fixtures', 'environment.js');

    linter.executeOnFiles([source]).results[0].messages.map(violation => violation.ruleId).should.containDeep([
      'eol-last',
      'linebreak-style',
      'no-mixed-spaces-and-tabs'
    ]);
  });

  it('should generate violations for incorrect code', () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');

    linter.executeOnFiles([source]).results[0].messages.map(violation => violation.ruleId).should.containDeep([
      'array-bracket-spacing',
      'brace-style',
      'comma-dangle',
      'comma-spacing',
      'comma-style',
      'consistent-this',
      'curly',
      'dot-notation',
      'id-match',
      'key-spacing',
      'keyword-spacing',
      'mocha/no-exclusive-tests',
      'new-cap',
      'newline-after-var',
      'no-class-assign',
      'no-const-assign',
      'no-constant-condition',
      'no-dupe-class-members',
      'no-empty',
      'no-labels',
      'no-multi-spaces',
      'no-multi-str',
      'no-multiple-empty-lines',
      'no-spaced-func',
      'no-this-before-super',
      'no-underscore-dangle',
      'object-curly-spacing',
      'one-var',
      'one-var-declaration-per-line',
      'operator-linebreak',
      'padded-blocks',
      'quote-props',
      'quotes',
      'semi',
      'semi-spacing',
      'sort-imports',
      'sorting/sort-object-props',
      'space-before-blocks',
      'space-before-function-paren',
      'space-in-parens',
      'space-infix-ops',
      'space-unary-ops',
      'spaced-comment',
      'sql-template/no-unsafe-query',
      'template-curly-spacing',
      'wrap-iife',
      'yoda'
    ]);
  });
});
