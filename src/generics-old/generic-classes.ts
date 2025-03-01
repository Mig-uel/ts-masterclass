// ---- GENERIC CLASSES --- //

class DataCollection<T> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const randIndex = Math.floor(Math.random() * this.data.length)
    return this.data[randIndex]
  }

  loadAll(): T[] {
    return this.data
  }

  add(val: T): T[] {
    this.data.push(val)
    return this.data
  }
}

interface User {
  name: string
  score: number
}

const users = new DataCollection<User>([
  { name: 'shaun', score: 125 },
  { name: 'mario', score: 100 },
  { name: 'peach', score: 150 },
])

users.add({ name: 'luigi', score: 100 })

const user = users.loadOne()
const userArr = users.loadAll()

console.log('load one - ', user)
console.log('load one - ', userArr)
