// -------- CLASSES ------- //
// a blueprint for an object

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

// ------ INHERITANCE ----- //
class MenuItem {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`
  }
}

class Pizza extends MenuItem {
  private base: Base = 'classic'
  private toppings: string[] = []

  constructor(title: string, price: number) {
    super(title, price)
  }

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

function printMenuItem(item: MenuItem): void {
  console.log(item.details)
}
printMenuItem(pizza)

// --- CLASSES AS TYPES --- //
const pizzaOne: Pizza = new Pizza('mario special', 15)
const pizzaTwo = new Pizza('luigi special', 10) // type auto-inferred

/**
 * @desc A function to add mushrooms to pizzas
 * @param {Pizza[]} pizza
 * @returns {void}
 */
function addMushroomsToPizzas(pizzas: Pizza[]): void {
  for (const p of pizzas) {
    p.addToppings('mushrooms')
  }
}

addMushroomsToPizzas([pizzaOne, pizzaTwo])
console.log(pizzaOne, pizzaOne)
