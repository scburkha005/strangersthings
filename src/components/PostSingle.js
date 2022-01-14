import MessagesForm from "./MessagesForm";
import { useState } from 'react';
import { useParams, useNavigate } from "react-router";

const PostSingle = ({children, setPosts, posts, post: newPost}) => {
  const {postid} = useParams();
  const navigate = useNavigate();

  console.log(newPost)

  const [post, setPost] = useState(() => {
    if (postid) {
      for (let i = 0; i < posts.length; i++) {
        if (posts[i]._id === postid) {
          return posts[i];
        }
      }
    } else {
      return newPost
    }
  });
  
  const handleChange = (e) => {
    if (postid) {
      navigate('/posts')
    } else {
      navigate(`/posts/${post._id}`)
    }
  }
 
  return (
    <div className='singlePost'>
      <h4>{post.title}</h4>
      <div>{post.description}</div>
      <div>{post.price}</div>
      {post.willDeliver ? <div>Delivery Available!</div> : <div>Delivery Unavailable :[</div>}
      {children}
      {postid && <MessagesForm />}
      {
        postid ? <button onClick={handleChange}>Return to Posts</button> : <button onClick={handleChange}>View Post</button>
      }
    </div>
  )
}

export default PostSingle;