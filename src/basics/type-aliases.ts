// ----- TYPE ALIASES ----- //

// example 1 - tuple

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)

  return [r, g, b]
} // returns a type of Rgb type

const colorOne = getRandomColor()
const colorTwo = getRandomColor()
console.log(colorOne, colorTwo)

// example 2 - object literal

type User = {
  name: string
  score: number
}

//const userOne: User = { name: 'mario', score: 75, age: 25 } // error - must adhere to type User
const userOne: User = { name: 'mario', score: 75 }

/**
 * @desc A function that formats and prints user info
 * @param {User} user
 * @returns {void}
 */
function formatUser(user: User): void {
  console.log(`User: ${user.name}`)
  console.log(`Score: ${user.score}`)
}
// formatUser({ name: 'mario' }) // error - arguments must be of type User
formatUser(userOne)
formatUser({ name: 'yoshi', score: 100 })
