import { useState } from 'react';
import  PostsForm  from "./PostsForm";
import { createPost } from '../api';

const AddPosts = ({token, posts, setPosts}) => {
  const blankPost = {
    post: {
      title: '',
      description: '',
      price: '',
      location: '',
      willDeliver: false
    }
  }

  const [singlePost, setSinglePost] = useState(blankPost);

  const handleAdd = async (e) => {
    try {
      e.preventDefault();
      if (singlePost.post.location === '') {
        singlePost.post.location = '[On Request]';
      }
      const createdPost = await createPost(token, singlePost);
      console.log(createdPost);
      setPosts([...posts, createdPost]);
      setSinglePost(blankPost);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <>
      <h2>Add Post</h2>
      <PostsForm handleSubmit={handleAdd} singlePost={singlePost} setSinglePost={setSinglePost} />
    </>
  )
}

export default AddPosts;