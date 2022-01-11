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
      {token && <AddPosts token={token} setPosts={setPosts} posts={posts}/>}
      <div className = 'posts'>
        {posts.length > 0 && posts.map(({_id, description, title, price, willDeliver}) => {
          return (
            <div className='singlePost' key={_id}>
              <h4>{title}</h4>
              <div>{description}</div>
              <div>{price}</div>
              {willDeliver ? <div>Delivery Available!</div> : <div>Delivery Unavailable :[</div>}
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Posts;