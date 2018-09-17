'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

function yell(str){
    return '*' + str.toLowerCase() + '*'
}

//* Begin of tests
const assert = require('assert')

assert.deepEqual(yell('HELLO'), '*hello*')
assert.deepEqual(yell('COUCOU'), '*coucou*')
assert.deepEqual(yell('BONJOUR'), '*bonjour*')
// End of tests */
