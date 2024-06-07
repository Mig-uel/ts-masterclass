// -- INTERSECTION TYPES -- //

interface HasID {
  id: number
}

const addIdToValue = <T>(val: T): T & HasID => {
  const id = Math.random()

  return { ...val, id }
}

interface Post {
  title: string
  thumbsUp: number
}

const post = addIdToValue<Post>({ title: 'Mario rules', thumbsUp: 250 })
console.log(post.id, post.title, post.thumbsUp)
