// -- GENERIC INTERFACES -- //

interface Collection<T> {
  data: T[]
  name: string
}

const collectionOne: Collection<string> = {
  data: ['mario', 'luigi', 'peach'],
  name: 'mario characters',
}

const collectionTwo: Collection<number> = {
  data: [10, 15, 27, 9, 3, 34],
  name: 'winning lottery numbers',
}

const randomCollectionItem = <T>(c: Collection<T>): T => {
  const randIndex = Math.floor(Math.random() * c.data.length)

  return c.data[randIndex]
}

// const resultOne = randomCollectionItem<string>(collectionTwo) // error - passed in type 'string', but argument is type number
const resultOne = randomCollectionItem<string>(collectionOne)
const resultTwo = randomCollectionItem(collectionTwo)

console.log(resultOne)
console.log(resultTwo)
