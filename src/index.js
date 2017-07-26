'use strict';

const Module = require('module');
const findRoot = require('find-root');

const pkg = { success: false };

try {
	pkg.path = findRoot(process.cwd());
	pkg.name = require(pkg.path + '/package.json').name;
	const origRequire = Module.prototype.require;
	Module.prototype.require = pkgName => pkgName === pkg.name ? origRequire(pkg.path) : origRequire(pkgName);
	pkg.success = true;
} catch (err) {}

module.exports = pkg;
