import { login } from '../api'
import { useState } from 'react'

const Login = ({ token, setToken, password, username, setPassword, setUsername }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    const [token, message] = await login(username, password);
    console.log('token: ', token, 'message: ', message);
    setToken(token);
    setMessage(message);
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h2>Login</h2>
      {message && <div>{message}</div>}
      <input value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
      <input value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
      <button>Submit</button>
    </form>
  )
}

export default Login