type Post = {
  id: number, 
  title: string, 
  text: string
}
const posts = [
  {id: 1, title: "sample 1", text:"lorem ipsum"},
  {id: 2, title: "sample 2", text: "ipsum lorem"}
]

function Blog() {
  return (
    <main>
      <h1>Blog Feed</h1>
      <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      </ul>
    </main>
  )
}

export {Blog}