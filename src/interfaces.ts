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

//  INTERFACES AS FUNCTION ARGUMENT TYPES  //

/**
 * @desc A function that takes in a post and prints its properties
 * @param {Post} post
 * @returns {void}
 */
function createPost(post: Post): void {
  console.log(`Post Title: ${post.title}`)
  console.log(`Post Author: ${post.author.name}`)
}
// createPost({ title: 'a new post title' }) // error - parameter passed must adhere to the interface Post
createPost(post1)

//  INTERFACES WITH ARRAYS  //

let posts: Post[] = [] // array with only types of Post objects
// posts.push('sd') // error - can only add elements of type Post
posts.push(post1)
