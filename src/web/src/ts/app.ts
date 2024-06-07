import { Pizza } from './models/pizza.model'

document.addEventListener('DOMContentLoaded', async () => {
  // load pizza data
  const pizzas = await Pizza.getAll()

  console.log(pizzas)
})
