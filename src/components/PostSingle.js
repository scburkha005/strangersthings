import MessagesForm from "./MessagesForm";
import { useState } from 'react';
import { useParams, useNavigate } from "react-router";
import './PostSingle.css';

const PostSingle = ({children, token, setPosts, posts, post: newPost}) => {
  const {postid} = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(() => {
    //account for refresh
    if (postid) {
      return {
        description: '',
        price: '',
        location: '',
        willDeliver: false,
        messages: [],
        _id: ''
      }
    } else {
      return newPost
    }
  });
  //filters post to specific postid to render a single post
  if (postid !== post._id) {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i]._id === postid) {
        setPost(posts[i]);
      }
    }
  }
  //return to all posts or view single post
  const handleChange = (e) => {
    if (postid) {
      navigate('/posts')
    } else {
      navigate(`/posts/${post._id}`)
    }
  }
 
  return (
    <div className='singlePost'>
      <div className='singlePost-title'>{post.title}</div>
      <div>{post.description}</div>
      <div>Price: {post.price}</div>
      <div>Location: {post.location}</div>
      {post.willDeliver ? <div>Delivery Available!</div> : <div>Delivery Unavailable :[</div>}
      {children}
      {postid && token && !post.isAuthor && <MessagesForm token={token} postid={postid}/>}
      {
        postid ? <button onClick={handleChange}>Return to Posts</button> : <button onClick={handleChange}>View Post</button>
      }
      { postid && post.messages.map((message) => {
        return (
          <div key={message._id} className='singlepost-singlemessage'>
            <div>From: {message.fromUser.username}</div>
            <div>{message.content}</div>
          </div>
        )
      })}
    </div>
  )
}

export default PostSingle;