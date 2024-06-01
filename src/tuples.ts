// -------- TUPLES -------- //
/* like an array but the types are in a specific order */

let person: [string, number, boolean] = ['mario', 30, true]

// ---- TUPLE EXAMPLES ---- //

let hsla: [number, string, string, number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [94.7, 20.1]

function useCoords(): [number, number] {
  // get coords

  const lat = 100
  const long = 5

  return [lat, long]
}

const [lat, long] = useCoords()

// ----- NAMED TUPLES ----- //
/* adds more context to a tuple by providing names to the properties of the tuple */

let user: [name: string, age: number]
// user = ['peach', true] // error - second value will yield type error
user = ['peach', 24]
console.log(user[0]) // indicated the type of the [0] index property/value
