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
}

const pizza = new Pizza('mario special', 15)

pizza.addToppings('mushrooms')
pizza.addToppings('four cheese blend')
pizza.removeTopping('mushrooms')
