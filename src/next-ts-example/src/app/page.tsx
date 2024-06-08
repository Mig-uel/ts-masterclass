import PostCard from '@/components/post-card.component'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')

  if (!res.ok) alert('Could not fetch the posts')

  return res.json()
}

export default async function Home() {
  const posts: Post[] = await fetchPosts()

  return (
    <main>
      <h2>Home</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  )
}
