import React, { useEffect, useState } from 'react'

interface jsonData {
  id: number
  title: string
  body: string
}

const PostCards = ({ title, body, id }: jsonData) => {
  const [posts, setPosts] = useState<jsonData[]>([])

  const fetchPosts = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data: jsonData[] = await res.json()
      console.log(data)
      setPosts(data)
      throw new Error('Error fetching Data')
    } catch (error) {
      console.log('Failed to fetch Data', error)
    }
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <div>
        <p>{title}</p>
        <p>{body}</p>
        <p>{id}</p>
        {posts.map((post: jsonData) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <p>Bayo</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PostCards
