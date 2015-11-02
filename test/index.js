'use strict';

/**
 * Tests for `eslint-config-seegno`.
 */

describe('eslint-config-seegno', () => {
  it('should load a valid config file', () => {
    const config = require('../src');

    config.should.be.an.Object().and.should.not.be.empty();
    config.should.containEql(['env', 'extends', 'parser', 'root', 'rules']);
  });

  it('should define the proper environment', () => {
    const config = require('../src');

    config.env.should.be.an.Object().and.should.not.be.empty();
    config.env.should.containEql(['es6', 'mocha', 'node']);
    config.env.es6.should.be.true();
    config.env.mocha.should.be.true();
    config.env.node.should.be.true();
  });

  it('should extend `eslint:recommended`', () => {
    const config = require('../src');

    config.extends.should.equal('eslint:recommended');
  });

  it('should use `babel-eslint` as parser', () => {
    const config = require('../src');

    config.parser.should.equal('babel-eslint');
  });

  it('should limit the eslint scope to the project only', () => {
    const config = require('../src');

    config.root.should.be.true();
  });

  it('should override some of the inherited rules', () => {
    const config = require('../src');

    config.rules.should.be.an.Object().and.should.not.be.empty();
    config.rules['comma-dangle'][0].should.equal(0);
    config.rules['no-cond-assign'][1].should.equal('always');
    config.rules['no-empty'].should.equal(0);
  });
});
