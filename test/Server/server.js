import test from 'ava';
import server from '../../server.js';


test.before(t =>{
	server;
});

test('Test', t => {
	t.pass();
});