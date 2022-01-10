import { useEffect } from "react";
import { fetchPosts } from "../api";
import AddPosts from './AddPosts';

const Posts = ({posts, setPosts, token}) => {
  useEffect(() => {
    fetchPosts().then((posts) => {
      setPosts(posts)
    })
  }, [])
  return (
    <>
      {token && <AddPosts token={token} />}
      <div className = 'posts'>
        {posts.length > 0 && posts.map(({_id, description}) => {
          return (
            <div key={_id}>
              {description}
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Posts;