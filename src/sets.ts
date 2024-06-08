// -- SETS IN TYPESCRIPT -- //

const names = new Set<string>()

names.add('mario')
names.add('peach')
names.add('luigi')
// names.add('mario') // error - will not be added, duplicate
// names.add(4) // error - will not be added, type error 'number'

//  SETS WITH CUSTOM TYPES  //

interface User {
  email: string
  score: number
}

const user1: User = { email: 'mario@email.com', score: 10 }
const user2: User = { email: 'peach@email.com', score: 15 }

const users = new Set<User>()
users.add(user1)
users.add(user2)
// users.add(user1) // error - will not be added, duplicate
// users.add('hello') // error - will not be added, type error

// SETS AS FUNCTION ARGUMENTS //

function logUserEmails(user: Set<User>): void {
  users.forEach((user) => console.log(user.email))
}
// logUserEmails('user') // error - type error, not a set
logUserEmails(users)
