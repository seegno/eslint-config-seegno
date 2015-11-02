'use strict';

/**
 * Module dependencies.
 */

import { CLIEngine } from 'eslint';
import path from 'path';

/**
 * Instances.
 */

const cli = new CLIEngine();
const file = path.join(__dirname, '..', '.eslintrc');

/**
 * Export custom configuration.
 */

export default cli.getConfigForFile(file);
