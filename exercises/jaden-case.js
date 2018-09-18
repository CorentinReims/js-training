'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = sentence => {
    const words = sentence.toLowerCase().split(" ")
    let sentenceUpperCaseWords = ''
    let wordModified = ''
    for (let i = 0; i < words.length; i++){
        const word = words[i]
        wordModified = word[0].toUpperCase() + word.slice(1, word.length)
        sentenceUpperCaseWords += `${wordModified} `
    }
    return sentenceUpperCaseWords.slice(0, -1)
}




//* Begin of tests
const assert = require('assert')
assert.deepStrictEqual(jadenCase("HOW ARE YOU ?"), "How Are You ?")
assert.deepStrictEqual(jadenCase("How ARE you ?"), "How Are You ?")
assert.deepStrictEqual(jadenCase("HoW arE yOu ?"), "How Are You ?")
assert.deepStrictEqual(jadenCase("how are you ?"), "How Are You ?")
assert.deepStrictEqual(jadenCase("how areyou ?"), "How Areyou ?")
// End of tests */
