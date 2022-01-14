import { useState, useEffect } from "react";
import { fetchPosts, deletePost } from "../api";
import AddPosts from './AddPosts';
import PostSingle from "./PostSingle";

const Posts = ({posts, setPosts, token}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(({description, title}) => {
    return description.toLowerCase().includes(searchTerm.toLowerCase()) || title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <>
      <input type='text' placeholder='search vacation' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      {token && <AddPosts token={token} setPosts={setPosts} posts={posts}/>}
      <div className = 'posts'>
        {filteredPosts.length > 0 && filteredPosts.map((post) => {
          return (
            <PostSingle key={post._id} post={post} setPosts={setPosts} posts={posts}>
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