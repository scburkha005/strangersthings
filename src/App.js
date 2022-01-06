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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
   <div className="App">
     <nav>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register User</Link>
     </nav>
     <Routes>
       <Route path='/' element={<Posts posts={posts} setPosts={setPosts} />}></Route>
       {/*work on login register  */}
       <Route path='/login' element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}></Route>
       <Route path='/register' element={<Register username={username} setUsername={setUsername} password={password}/>}></Route>
     </Routes>
   </div> 
  );
}

export default App;
