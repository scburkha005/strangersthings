import { useEffect } from 'react'

const PostsForm = ({singlePost, setSinglePost}) => {
  
  useEffect(() => {
    console.log(singlePost)
  }, [singlePost])

  return (
    <form className='posts-form'>
      <input value={singlePost.title} placeholder='title' onChange={(e)=>setSinglePost({...singlePost, title: e.target.value})}></input>
      <input value={singlePost.description} placeholder='description' onChange={(e)=>setSinglePost({...singlePost, description: e.target.value})}></input>
      <input value={singlePost.price} placeholder='price' onChange={(e)=>setSinglePost({...singlePost, price: e.target.value})}></input>
      <input type='checkbox' name='willDeliver' onClick={()=>setSinglePost({...singlePost, willDeliver: !singlePost.willDeliver})}></input>
      <label for='willDeliver'>Will you deliver this item?</label>
    </form>
  )
}

export default PostsForm;