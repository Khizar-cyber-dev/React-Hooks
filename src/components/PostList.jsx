import React from 'react'

const PostList = ({ data, author }) => {
  return (
    <div>
        <h2>Post List {author}</h2>
        {data && data.length > 0 ? (
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No posts available.</p>
        )}
    </div>
  )
}

export default PostList