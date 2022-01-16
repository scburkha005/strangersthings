import { useState } from "react";
import { deletePost } from "../api";
import PostSingle from "./PostSingle";
import { useNavigate } from "react-router";
import Button from '@mui/material/Button';
import './Posts.css'

const Posts = ({posts, setPosts, token}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredPosts = posts.filter(({description, title}) => {
    return description.toLowerCase().includes(searchTerm.toLowerCase()) || title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <>
      <input type='text' placeholder='search vacation' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      {token && <Button className='addpost-button' variant='contained' onClick={() => navigate('/posts/add')}>Add Post</Button>}
      <div className = 'posts'>
        {filteredPosts.length > 0 && filteredPosts.map((post) => {
          return (
            <PostSingle key={post._id} post={post} setPosts={setPosts} posts={posts}>
              {post.isAuthor && <Button variant='outlined' onClick={async () => {
                try {
                  await deletePost(post._id, token)
                  const newArray = posts.filter((el) => el._id !== post._id);
                  setPosts(newArray);
                } catch (err) {
                  console.error(err);
                }
              }}>Delete</Button>}
            </PostSingle>
          )
        })}
      </div>
    </>
  )
}
export default Posts;