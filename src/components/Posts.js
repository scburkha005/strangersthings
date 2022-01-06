import { useEffect } from "react";
import { fetchPosts } from "../api";

const Posts = ({posts, setPosts}) => {
  useEffect(() => {
    fetchPosts().then((posts) => {
      setPosts(posts)
    })
  }, [])
  return (
    <div className = 'posts'>
      {posts.length > 0 && posts.map(({_id, description}) => {
        return (
          <div key={_id}>
            {description}
          </div>
        )
      })}
    </div>
  )
}
export default Posts;