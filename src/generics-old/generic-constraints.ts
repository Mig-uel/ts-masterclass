// -- GENERIC CONSTRAINTS - //

interface HasId {
  id: number
}

interface User {
  name: string
  score: number
  id: number
}

class DataCollection<T extends HasId> {
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

  deleteOne(id: number): void {
    this.data = this.data.filter((d) => d.id !== id)
  }
}

const users = new DataCollection<User>([
  { name: 'shaun', score: 125, id: 1 },
  { name: 'mario', score: 100, id: 2 },
  { name: 'peach', score: 150, id: 3 },
])

users.add({ name: 'luigi', score: 50, id: 4 })
users.deleteOne(1)

