import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import './PostsForm.css';

const PostsForm = ({singlePost: {post: {title, description, price, location, willDeliver}}, singlePost, setSinglePost, handleSubmit}) => {

  return (
    <form className='posts-form' onSubmit={handleSubmit}>
      <TextField variant='filled' required label='title' value={title} onChange={(e)=>setSinglePost({post: {...singlePost.post, title: e.target.value}})}/>
      <TextField variant='filled' required label='description' value={description}  onChange={(e)=>setSinglePost({post: {...singlePost.post, description: e.target.value}})}/>
      <TextField variant='filled' label='location' value={location} onChange={(e)=>setSinglePost({post: {...singlePost.post, location: e.target.value}})} />
      <TextField variant='filled' required label='price' value={price} onChange={(e)=>setSinglePost({post: {...singlePost.post, price: e.target.value}})}/> 
      <FormControlLabel label='Will you deliver this item' checked={willDeliver} control={<Checkbox onChange={(e)=>setSinglePost({post: {...singlePost.post, willDeliver: !singlePost.post.willDeliver}})}/>}/>
      <button>Submit</button>
    </form>
  )
}

export default PostsForm;