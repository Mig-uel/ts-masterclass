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
}

const pizza = new Pizza('mario special', 15)
