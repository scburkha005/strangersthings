import { useEffect } from 'react'

const PostsForm = ({singlePost: {post: {title, description, price, location}}, singlePost, setSinglePost, handleSubmit}) => {
  
  useEffect(() => {
    console.log(singlePost)
  }, [singlePost])

  return (
    <form className='posts-form' onSubmit={handleSubmit}>
      <input value={title} placeholder='title' onChange={(e)=>setSinglePost({post: {...singlePost.post, title: e.target.value}})}/>
      <input value={description} placeholder='description' onChange={(e)=>setSinglePost({post: {...singlePost.post, description: e.target.value}})}/>
      <input value={location} placeholder='location' onChange={(e)=>setSinglePost({post: {...singlePost, location: e.target.value}})} />
      <input value={price} placeholder='price' onChange={(e)=>setSinglePost({post: {...singlePost.post, price: e.target.value}})}/> 
      <input type='checkbox' name='willDeliver' onClick={()=>setSinglePost({post: {...singlePost.post, willDeliver: !singlePost.willDeliver}})}/>
      <label htmlFor='willDeliver'>Will you deliver this item?</label>
      <button>Submit</button>
    </form>
  )
}

export default PostsForm;