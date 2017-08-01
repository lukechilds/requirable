'use strict';

const pkgDir = require('pkg-dir');
const mock = require('mock-require');

const pkg = { success: false };

try {
	pkg.path = pkgDir.sync();
	pkg.name = require(pkg.path + '/package.json').name;
	mock(pkg.name, require(pkg.path));
	pkg.success = true;
} catch (err) {}

module.exports = pkg;
