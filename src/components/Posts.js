import { useEffect } from "react";
import { fetchPosts, deletePost } from "../api";
import AddPosts from './AddPosts';
import PostSingle from "./PostSingle";

const Posts = ({posts, setPosts, token}) => {

  const handleDelete = async () => {
    const newArray = posts.filter((el) => el._id )
  }

  return (
    <>
      {token && <AddPosts token={token} setPosts={setPosts} posts={posts}/>}
      <div className = 'posts'>
        {posts.length > 0 && posts.map((post) => {
          return (
            <PostSingle key={post._id} post={post}>
              {post.isAuthor && <button onClick={handleDelete}>Delete</button>}
            </PostSingle>
          )
        })}
      </div>
    </>
  )
}
export default Posts;