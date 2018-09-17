'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */


function yell(n){
    return n.toUpperCase()
}

//* Begin of tests
const assert = require('assert')

assert.deepEqual(yell('hello'), 'HELLO')
assert.deepEqual(yell('coucou'), 'COUCOU')
assert.deepEqual(yell('Bonjour'), 'BONJOUR')
// End of tests */
