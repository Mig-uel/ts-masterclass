// -- REUSABLE INTERFACES - //

interface hasQuantity {
  qty: number
}

const something: hasQuantity = { qty: 50 }

function printQuantity(item: hasQuantity): void {
  console.log(`Quantity: ${item.qty}`)
}

const fruit = {
  name: 'mango',
  qty: 50,
}
const vehicle = {
  type: 'car',
  qty: 3,
}
const person = {
  name: 'mario',
  age: 30,
}

printQuantity(fruit) // works because variable made ahead and it implements the interface
printQuantity(vehicle) // works because variable made ahead and it implements the interface
// printQuantity(person) // error - must have property qty adhering to the hasQuantity interface
// printQuantity({qty: 50, title: 'something'}) // error - cannot create an object literal directly
