import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Posts,
  Login,
  Register
 } from './components'
import { isLoggedIn } from './api';

const App = () => {
  const [posts, setPosts] = useState([]);  
  const [token, setToken] = useState('');

  useEffect(() => {
    isLoggedIn(token).then((data) => {
      console.log('data', data)
    });
  }, [token])
  
  return (
   <div className="App">
     <nav className='navbar'>
      {/* { &&} */}
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register User</Link>
     </nav>
     <Routes>
       <Route path='/' element={<Posts posts={posts} setPosts={setPosts} />}></Route>
       {/*work on login register  */}
       <Route path='/login' element={<Login token={token} setToken={setToken} />}></Route>
       <Route path='/register' element={<Register token={token} setToken={setToken} />}></Route>
     </Routes>
   </div> 
  );
}

export default App;
