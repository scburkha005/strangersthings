import {useState} from 'react'
import {register} from '../api'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await register(username, password);
    console.log(data)
  }

  return (
    <form className='register' onSubmit={handleSubmit}>
      <input value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
      <input value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
      <button type='submit'>Submit</button>
    </form>    
  )
}

export default Register