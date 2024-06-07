const titleInput = document.querySelector(
  'input[name="title"]'
) as HTMLInputElement // type assertion

const descriptionInput = document.querySelector(
  'textarea'
) as HTMLTextAreaElement // type assertion

const form = document.querySelector('.create') as HTMLFormElement // type assertion

form.addEventListener('submit', async (e) => {
  e.preventDefault()
})
