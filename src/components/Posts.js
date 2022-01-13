import { useEffect } from "react";
import { fetchPosts, deletePost } from "../api";
import AddPosts from './AddPosts';
import PostSingle from "./PostSingle";

const Posts = ({posts, setPosts, token}) => {

  return (
    <>
      {token && <AddPosts token={token} setPosts={setPosts} posts={posts}/>}
      <div className = 'posts'>
        {posts.length > 0 && posts.map((post) => {
          return (
            <PostSingle key={post._id} post={post}>
              {post.isAuthor && <button onClick={async () => {
                try {
                  await deletePost(post._id, token)
                  const newArray = posts.filter((el) => el._id !== post._id);
                  setPosts(newArray);
                } catch (err) {
                  console.error(err);
                }
              }}>Delete</button>}
            </PostSingle>
          )
        })}
      </div>
    </>
  )
}
export default Posts;