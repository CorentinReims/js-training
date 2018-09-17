'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

 const keepFirst = str => {
     return str.slice(0,2)
 }

 const keepLast = str => {
     return str.slice(str.length-2, str.length)
 }

 const keepFirstLast = str => {
     return str.slice(3, 5)
 }

//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(keepFirst("Hellocoucou"), "He")
assert.deepStrictEqual(keepLast("Hellocoucou"), "ou")
assert.deepStrictEqual(keepFirstLast("Hellocoucou"), "lo")
// End of tests */
