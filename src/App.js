import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Posts,
  AccountForm,
  PostSingle,
  Profile,
  Welcome,
  AddPosts,
  EditPosts
 } from './components'
import { getUser, fetchPosts } from './api';
import Button from '@mui/material/Button';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const [editPost, setEditPost] = useState({});
  const [user, setUser] = useState({
    messages: [],
    username: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, [])

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      getUser(token).then((userObject) => {
        setUser(userObject);
      });
    }
    //refetch posts to update isAuthor key on token change
    fetchPosts(token).then((posts) => {
      setPosts(posts);
    })
  }, [token])

  return (
   <div className="App">
     <nav className='navbar'>
      {user.username && <span>{user.username}</span>}
      <Link to='/posts'>Posts</Link>
      {token && <Link to='/profile'>Profile</Link> }
      {
        token ? 
        <Button variant='contained' onClick={() => {
          setToken('');
          setUser({});
          localStorage.removeItem('token');
          navigate('/posts')
        }}>Log Out</Button> :
        <Link to='/account/login'>Login</Link>
      }
     </nav>
     <Routes> 
       <Route path='/' element={<Welcome />}></Route>
       <Route path='/posts' element={<Posts posts={posts} setPosts={setPosts} token={token}/>}></Route>
       <Route exact path='/account/:method' element={ <AccountForm setToken={setToken}/>}></Route>
       <Route exact path='/posts/:postid' element={<PostSingle posts={posts} token={token} setEditPost={setEditPost}/> }></Route>
       <Route path='/profile' element={<Profile user={user}/>} ></Route>
       <Route exact path='/posts/add' element={<AddPosts token={token} setPosts={setPosts} posts={posts}/>} ></Route>
       <Route exact path='/posts/:postid/edit' element={<EditPosts token={token} setPosts={setPosts} posts={posts} editPost={editPost} setEditPost={setEditPost}/>}></Route>
     </Routes>
   </div> 
  );
}

export default App;
