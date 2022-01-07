import {useState} from 'react'
import {register} from '../api'

const Register = ({token, password, username, setToken, setPassword, setUsername}) => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const [token, message] = await register(username, password);
    setMessage(message);
    if (token) {
      console.log(token)
      setToken(token);
    }
  }

  return (
    <form className='register' onSubmit={handleSubmit}>
      <h2>Register</h2>
      {message && <div>{message}</div>}
      <input value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
      <input value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Register