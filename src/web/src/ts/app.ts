
const createPizzaTemplate = (pizza: PizzaProps): string => {
  return `
    <div class="pizza">
      <h2>${pizza.title}</h2>
      <p class="toppings">${pizza.toppings.join(', ')}</p>
      <p>${pizza.description}</p>
      <span>$${pizza.price}</span>
    </div>
  `
}

const renderTemplates = (templates: string[], parent: Element): void => {}

document.addEventListener('DOMContentLoaded', async () => {
  // load pizza data
  const pizzas = await Pizza.getAll()

  console.log(pizzas)
})
