import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Posts,
  Login,
  Register,
  PostsForm
 } from './components'
import { checkUser } from './api';

const App = () => {
  const [posts, setPosts] = useState([]);  
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    checkUser(token).then(([message, username]) => {
      console.log(message)
      if (username) {
        setIsLoggedIn(true);
        setUsername(username);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [token])
  
  return (
   <div className="App">
     <nav className='navbar'>
      {username && <span>{username}</span>}
      <Link to='/'>Home</Link>
      <Link to='/register'>Register User</Link>
      {
        isLoggedIn ? 
        <button onClick={() => {
          setToken('');
          setUsername('');
        }}>Log Out</button> : 
        <Link to='/login'>Login</Link>
      }
     </nav>
     <Routes>
       <Route path='/' element={<Posts posts={posts} setPosts={setPosts} token={token}/>}></Route>
       {/*work on login register  */}
       <Route path='/login' element={<Login token={token} setToken={setToken} />}></Route>
       <Route path='/register' element={<Register token={token} setToken={setToken} />}></Route>
     </Routes>
   </div> 
  );
}

export default App;
