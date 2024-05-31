// ----------
// Functions
// ----------

/**
 * @description Add two numbers together and returns the result
 * @param {number} a first value
 * @param {number} b second value
 * @return {number} the result of a + b
 */
const addTwoNumbers = (a: number, b: number): number => a + b

/**
 * @description Subtract two numbers and returns the result
 * @param {number} a first value
 * @param {number} b second value
 * @returns {number} the result of a - b
 */
const subtractTwoNumbers = (a: number, b: number): number => a - b

// addTwoNumbers(false, 2) // will output error because of param type
addTwoNumbers(3, 2)
subtractTwoNumbers(1, 2)

/**
 * @desc Adds up all numbers in an array and prints it
 * @param items - array of numbers
 */
const addAllNumbers = (items: number[]): void => {
  const total: number = items.reduce((acc, curr) => acc + curr, 0)
  console.log(total)
}

addAllNumbers([1, 2, 3, 4])

// ---------
// Return type inference
// ---------
function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}`
}

const result = formatGreeting('Angel', 'Welcome')
console.log(result)
