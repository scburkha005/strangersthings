import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react'
import {
  Posts,
  Login,
  Register
 } from './components'

function App() {
  const [posts, setPosts] = useState([]);  
  
  return (
   <div className="App">
     <nav>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register User</Link>
     </nav>
     <Routes>
       <Route path='/' element={<Posts posts={posts} setPosts={setPosts} />}></Route>
       {/*work on login register  */}
       <Route path='/login' element={<Login />}></Route>
       <Route path='/register' element={<Register />}></Route>
     </Routes>
   </div> 
  );
}

export default App;
