// object literals
let user: { firstName: string; age: number; id: number } = {
  firstName: 'Mario',
  age: 30,
  id: 1,
} // union type object

user.firstName = 'Peach'
//user.email = 'peach@netninja.dev' // error - property not defined
user.id = 2

// type inference with object literals

let person = { name: 'Luigi', score: 35 }
person.name = 'Peach'
// person.id = 2 // error - property not defined in definition
person.score = 35

const score = person.score
