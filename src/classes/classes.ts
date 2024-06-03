// -------- CLASSES ------- //
// a blueprint for an object

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

class Pizza {
  constructor(title: string, price: number) {
    this.title = title
    this.price = price
  }

  title: string
  price: number
  base: Base = 'classic'
  toppings: string[] = []

  addToppings(topping: string): void {
    this.toppings.push(topping)
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping)
  }
  selectBase(base: Base): void {
    this.base = base
  }
}

const pizza = new Pizza('mario special', 15)

pizza.addToppings('mushrooms')
pizza.addToppings('four cheese blend')
pizza.removeTopping('mushrooms')

//pizza.selectBase('crispy') // error - param does not adhere to the type Base
pizza.selectBase('garlic')
