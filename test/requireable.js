import test from 'ava';

test.serial(`outputs success info`, t => {
	const output = require('../');
	t.true(output.success);
	t.is(output.name, 'requireable');
});
