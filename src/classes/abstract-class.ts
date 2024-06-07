// --- ABSTRACT CLASSES --- //
// a class with properties and methods and can be inherited by other classes but cannot be instantiated

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

interface HasFormatter {
  format(): string
}

abstract class MenuItem implements HasFormatter {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`
  }

  abstract format(): string // allows different implementations of this function; enforcing methods but different implementation
}

class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price)
  }

  private base: Base = 'classic'
  private toppings: string[] = []

  addTopping(topping: string): void {
    this.toppings.push(topping)
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping)
  }
  selectBase(base: Base): void {
    this.base = base
  }

  format(): string {
    let formatted = this.details.toLocaleUpperCase() + '\n'

    // base
    formatted += `Pizza on a ${this.base} base`

    // toppings
    if (this.toppings.length < 1) formatted += ' with no toppings'
    else {
      formatted += ` with ${this.toppings.join(', ')} toppings`
    }

    return formatted
  }
}

const pizza = new Pizza('Mario Special', 15)
pizza.addTopping('mushrooms')
pizza.addTopping('peppers')

function printFormatted(val: HasFormatter): void {
  console.log(val.format())
}

printFormatted(pizza)
