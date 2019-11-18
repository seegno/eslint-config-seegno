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
    configFile: path.join(__dirname, '..', 'src', 'index.js'),
    ignore: false
  });

  it('should not generate any violation for correct code', () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');

    linter.executeOnFiles([source]).errorCount.should.equal(0);
  });

  it('should generate violations for environment-specific rules', () => {
    const source = path.join(__dirname, 'fixtures', 'environment.js');

    Array.from(linter.executeOnFiles([source]).results[0].messages.map(violation => violation.ruleId)).should.eql([
      'linebreak-style',
      'linebreak-style',
      'linebreak-style',
      'linebreak-style',
      'eol-last'
    ]);
  });

  it('should generate violations for incorrect code', () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');

    Array.from(linter.executeOnFiles([source]).results[0].messages.map(violation => violation.ruleId)).should.eql([
      'array-bracket-spacing',
      'arrow-parens',
      'brace-style',
      'capitalized-comments',
      'comma-dangle',
      'comma-spacing',
      'comma-style',
      'consistent-this',
      'curly',
      'dot-notation',
      'generator-star-spacing',
      'generator-star-spacing',
      'generator-star-spacing',
      'generator-star-spacing',
      'generator-star-spacing',
      'id-match',
      'indent',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'jest/no-focused-tests',
      'jest/no-focused-tests',
      'jest/no-identical-title',
      'key-spacing',
      'keyword-spacing',
      'no-new',
      'new-cap',
      'new-with-error/new-with-error',
      'newline-before-return',
      'no-class-assign',
      'no-console',
      'no-const-assign',
      'no-constant-condition',
      'no-dupe-class-members',
      'no-empty',
      'no-labels',
      'no-labels',
      'no-multi-spaces',
      'no-multi-str',
      'no-multiple-empty-lines',
      'no-spaced-func',
      'no-this-before-super',
      'no-undef',
      'no-underscore-dangle',
      'no-unused-vars',
      'object-curly-spacing',
      'object-curly-spacing',
      'one-var',
      'one-var-declaration-per-line',
      'operator-linebreak',
      'padded-blocks',
      'padded-blocks',
      'padded-blocks',
      'padded-blocks',
      'padded-blocks',
      'padded-blocks',
      'padding-line-between-statements',
      'quote-props',
      'quote-props',
      'quote-props',
      'quote-props',
      'quotes',
      'semi',
      'semi-spacing',
      'semi-spacing',
      'sort-imports-es6/sort-imports-es6',
      'sort-keys',
      'space-before-blocks',
      'space-before-function-paren',
      'space-in-parens',
      'space-in-parens',
      'space-infix-ops',
      'space-unary-ops',
      'spaced-comment',
      'sql-template/no-unsafe-query',
      'switch-case/newline-between-switch-case',
      'no-fallthrough',
      'switch-case/newline-between-switch-case',
      'template-curly-spacing',
      'template-curly-spacing',
      'wrap-iife',
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
      'react/jsx-curly-brace-presence',
      'react/jsx-no-literals',
      'react/jsx-tag-spacing',
      'react/jsx-tag-spacing',
      'react/jsx-tag-spacing',
      'react/jsx-tag-spacing',
      'react/jsx-tag-spacing',
      'react/prefer-stateless-function'
    ]);
  });
});
