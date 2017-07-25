import test from 'ava';

test(`importing doesn't throw`, t => {
	t.notThrows(() => require('../'));
});
