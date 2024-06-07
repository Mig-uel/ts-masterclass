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
