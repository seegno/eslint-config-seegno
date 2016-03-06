'use strict';

/**
 * Module dependencies.
 */

const config = require('../src');

/**
 * Tests for `eslint-config-seegno`.
 */

describe('eslint-config-seegno', () => {
  it('should load a valid config file', () => {
    config.should.be.an.Object().and.should.not.be.empty();
    config.should.containEql(['env', 'extends', 'parser', 'root', 'rules']);
  });

  it('should define the proper environment', () => {
    config.env.should.be.an.Object().and.should.not.be.empty();
    config.env.should.containEql(['es6', 'mocha', 'node']);
    config.env.es6.should.be.true();
    config.env.mocha.should.be.true();
    config.env.node.should.be.true();
  });

  it('should extend `eslint:recommended`', () => {
    config.extends.should.equal('eslint:recommended');
  });

  it('should use `babel-eslint` as parser', () => {

    config.parser.should.equal('babel-eslint');
  });

  it('should limit the eslint scope to the project only', () => {
    config.root.should.be.true();
  });

  it('should override some of the inherited rules', () => {
    config.rules.should.be.an.Object().and.should.not.be.empty();
    config.rules['comma-dangle'].should.equal('off');
    config.rules['no-cond-assign'][1].should.equal('always');
    config.rules['no-empty'].should.equal('off');
  });
});
