// -------- ANY TYPE ------- //
let age: any // can be any type
age = 30
age = false
// no code completion

let title
title = 25
title = { hello: 'world' }
// any type inference

// --- ANY TYPE IN ARRAY -- //
let things: any[] = ['hello', true, 30, null]
things.push({ id: 123 })

// ---- FUNCTION & ANY ---- //

/**
 * @desc A function that returns the addition of a itself
 * @param {any} value
 * @returns {any}
 */
function addTogether(value: any): any {
  return value + value
}

const resultOne = addTogether('hello') // returns 'any' type
const resultTwo = addTogether(3) // returns 'any' type

// useful when migrating from js to ts
// because using any won't cause errors initially
