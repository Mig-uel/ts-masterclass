// ------ TYPE GUARDS ----- //

type Id = number | string

/**
 * @desc A function that swaps types
 * @param {Id} id
 * @returns {Id} id Swapped types
 */
function swapIdType(id: Id): Id {
  if (typeof id === 'string') {
    return parseInt(id)
  } // can use string methods and properties

  return id.toString() // can use number methods and properties
}

const idOne = swapIdType(1) // returns string type
const idTwo = swapIdType('1') // returns number type

// --- TAGGED INTERFACES -- //

interface User {
  type: 'user' // tag/common property
  username: string
  email: string
  id: Id
}

interface Person {
  type: 'person' // tag/common property
  firstName: string
  age: number
  id: Id
}

/**
 * @desc A function that print out the details of a User or Person
 * @param {User | Person} value
 * @returns {void}
 */
function logDetails(value: User | Person): void {
  if (value.type === 'user') {
    console.log('User')
    console.log(`Username: ${value.username}`)
    console.log(`Email: ${value.email}`)
  }

  if (value.type === 'person') {
    console.log('Person')
    console.log(`First Name: ${value.firstName}`)
    console.log(`Age: ${value.age}`)
  }
}
