interface PostCard {
  title: string
  author: string
}

const PostCard = ({ title, author }: PostCard) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>Written by {author}</p>
    </div>
  )
}

export default PostCard
