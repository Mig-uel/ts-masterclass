// ------ INTERFACES ------ //
// template/structure used to impose what other data structures should adhere to (classes, objects, other interfaces)

interface Author {
  name: string
  avatar: string
}

const authorOne: Author = {
  name: 'mario',
  avatar: '/img/mario.png',
} // must adhere to the interface Author properties

interface Post {
  title: string
  body: string
  tags: string[]
  created_at: Date
  author: Author
}

const post1: Post = {
  title: 'my first post',
  body: 'something interesting...',
  tags: ['gaming', 'tech'],
  created_at: new Date(),
  author: authorOne,
}
