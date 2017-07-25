'use strict';

const findRoot = require('find-root');
const mock = require('mock-require');

const pkg = { success: false };

try {
	pkg.path = findRoot(process.cwd());
	pkg.name = require(pkg.path + '/package.json').name;
	mock(pkg.name, () => require(pkg.path));
	pkg.success = true;
} catch (err) {}

module.exports = pkg;
