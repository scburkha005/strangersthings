import { useEffect } from "react";
import { fetchPosts } from "../api";
import AddPosts from './AddPosts';
import PostSingle from "./PostSingle";

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
        {posts.length > 0 && posts.map(({_id, description, title, price, willDeliver}) => <PostSingle key={_id} description={description} title={title} price={price} willDeliver={willDeliver}/>)}
      </div>
    </>
  )
}
export default Posts;