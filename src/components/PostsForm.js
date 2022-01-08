import { useState } from 'react'

const PostsForm = () => {
  const blankPost = {
    title: '',
    description: '',
    price: undefined,
    willDeliver: false
  }
  const [singlePost, setSinglePost] = useState(blankPost);

  return (
    <form className='posts-form'>
      <input value={singlePost.title} placeholder='title'></input>
      <input value={singlePost.description} placeholder='description'></input>
      <input value={singlePost.price} placeholder='price'></input>
      <input type='checkbox' value={singlePost.willDeliver} name='willDeliver'></input>
      <label for='willDeliver'>Will you deliver this item?</label>
    </form>
  )
}

export default PostsForm;