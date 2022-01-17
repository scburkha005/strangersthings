import PostsForm from "./PostsForm";
import { useNavigate, useParams } from 'react-router';
import { editPostCall } from "../api";

const EditPosts = ({editPost, setEditPost, token, posts, setPosts}) => {
  const navigate = useNavigate();
  const {postid} = useParams();
  
  const handleEdit = async (e) => {
    e.preventDefault();
    const editedPost = await editPostCall(token, postid, editPost);
    for (let i = 0; i < posts.length; i++) {
      if (posts[i]._id === editedPost._id) {
        posts[i] = editedPost;
      }
    }
    navigate('/posts');
  }

  return (
    <>
      <h2>Edit Post</h2>
      <PostsForm handleSubmit={handleEdit} singlePost={editPost} setSinglePost={setEditPost} />
    </>
  )
}

export default EditPosts;