// ------ UNION TYPES ----- //

let someId: number | string // cam be either type number or string
someId = 1
someId = '2'

let email: string | null = null
email = 'mario@email.com'
email = null

type Id = number | string // type alias of type number or string
let anotherId: Id
anotherId = '1kj1b2eqwjbf'
anotherId = 3298230901

// ---- UNION TYPE CONS --- //

/**
 * @desc A function that takes in an id and swaps it
 * @param id
 * @returns {Id}
 */
function swapIdType(id: Id): Id {
  // can only use props and methods common to
  // both number and string types
  // parseInt(id) --> not allowed

  return id
  // return id.toFixed() // error - method not common to both number and string
  // return id.length // error - method not common to both number and string
}
swapIdType(5)
