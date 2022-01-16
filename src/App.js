import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Posts,
  AccountForm,
  PostSingle,
  Profile
 } from './components'
import { getUser, fetchPosts } from './api';
import AddPosts from './components/AddPosts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({
    messages: [],
    username: ''
  });

  useEffect(() => {
    console.log('hi []')
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
    //account for manual refresh
    // if (token) {
    //   getUser(token).then((userObject) => {
    //     setUser(userObject)
    //   })
    // }
  }, [])

  useEffect(() => {
    if (token) {
      console.log('hi')
      localStorage.setItem('token', token)
      getUser(token).then((userObject) => {
        setUser(userObject);
        console.log('userobject',user)
      });
    }
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
        <button onClick={() => {
          setToken('');
          setUser({});
          localStorage.removeItem('token');
        }}>Log Out</button> :
        <Link to='/account/login'>Login</Link>
      }
     </nav>
     <Routes>
       <Route path='/posts' element={<Posts posts={posts} setPosts={setPosts} token={token}/>}></Route>
       {/*work on login register  */}
       <Route exact path='/account/:method' element={ <AccountForm setToken={setToken}/>}></Route>
       <Route exact path='/posts/:postid' element={<PostSingle posts={posts} token={token}/> }></Route>
       <Route path='/profile' element={<Profile token={token} setUser={setUser} user={user}/>} ></Route>
       <Route exact path='/posts/add' element={<AddPosts token={token} setPosts={setPosts} posts={posts}/>} ></Route>
     </Routes>
   </div> 
  );
}

export default App;
