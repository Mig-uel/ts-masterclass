//  EXTENDING TYPE ALIASES  //

type Person = {
  id: string | number
  firstName: string
}

type User = Person & {
  email: string
} // type User extends type Person

const personOne = {
  id: 1,
  firstName: 'mario',
}
const personTwo = {
  id: '2',
  firstName: 'yoshi',
  email: 'yoshi@email.com',
}
const personThree = {
  email: 'peach@email.com',
}

/**
 * @returns A function that prints out user info
 * @param {User} user
 * @returns {void}
 */
function printUserInfo(user: User): void {
  console.log(`[${user.id}]: ${user.firstName} (${user.email})`)
}

//printUserInfo(personOne) // error - does not adhere to the User type
// printUserInfo(personThree) // error - does not adhere the Person type
printUserInfo(personTwo)
