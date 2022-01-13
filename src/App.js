import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Posts,
  AccountForm
 } from './components'
import { checkUser, fetchPosts } from './api';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, [])

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      checkUser(token).then((userObject) => {
        setUser(userObject);
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
      <Link to='/'>Home</Link>
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
       <Route path='/' element={<Posts posts={posts} setPosts={setPosts} token={token}/>}></Route>
       {/*work on login register  */}
       <Route exact path='/account/:method' element={ <AccountForm setToken={setToken}/>}></Route>
     </Routes>
   </div> 
  );
}

export default App;
