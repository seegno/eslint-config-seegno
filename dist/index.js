'use strict';

/**
 * Module dependencies.
 */

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _eslint = require('eslint');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

/**
 * Instances.
 */

var cli = new _eslint.CLIEngine();
var file = _path2['default'].join(__dirname, '..', '.eslintrc');

/**
 * Export custom configuration.
 */

exports['default'] = cli.getConfigForFile(file);
module.exports = exports['default'];