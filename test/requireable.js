import test from 'ava';

test.serial(`outputs success info`, t => {
	const output = require('../');
	t.true(output.success);
	t.is(output.name, 'requireable');
});

test.serial(`requiring package name requires root package`, t => {
	// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
	t.true(typeof require('requireable') === 'function');
});
