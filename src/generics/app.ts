function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return Object.assign(obj1, obj2)
}

type ObjectA = { name: string }
type ObjectB = { age: 30 }

const mergedObject = merge<ObjectA, ObjectB>({ name: 'Max' }, { age: 30 })
