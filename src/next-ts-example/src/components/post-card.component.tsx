interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface PostCard {
  post: Post
}

const PostCard = ({ post }: PostCard) => {
  return (
    <div className='card'>
      <h2>
        <b>{post.title}</b>
      </h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostCard
