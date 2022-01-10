import { useState } from 'react';
import  PostsForm  from "./PostsForm";

const AddPosts = ({token}) => {
  const blankPost = {
    title: '',
    description: '',
    price: undefined,
    willDeliver: false
  }
  const [singlePost, setSinglePost] = useState(blankPost);

  const handleAdd = (e) => {
    try {
      e.preventDefault();
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