// ----- GENERICS 101 ----- //
// make generic or reusable structures (functions, interfaces, classes) that can be used by many data types, pass data types into the structures

function logAndReturnString(val: string): string {
  console.log(val)
  return val
}
function logAndReturnNumber(val: number): number {
  console.log(val)
  return val
}
function logAndReturnBoolean(val: boolean): boolean {
  console.log(val)
  return val
}

// generic function - example 1
function logAndReturnValue<T>(val: T): T {
  console.log(val)
  return val
} // T - stands for type

const resultOne = logAndReturnValue<string>('mario')
const resultTwo = logAndReturnValue<number>(10)

// generic function - example 2
function getRandomArrayValue<T>(values: T[]): T {
  const randIndex = Math.floor(Math.random() * values.length)

  return values[randIndex]
}

interface User {
  name: string
  score: number
}

const users: User[] = [
  { name: 'mario', score: 100 },
  { name: 'peach', score: 150 },
  { name: 'wario', score: 75 },
  { name: 'yoshi', score: 90 },
]

const randomUser = getRandomArrayValue<User>(users)
console.log(randomUser)
