import { login } from '../api'

const Login = ({ token, message, setToken, setMessage, password, username, setPassword, setUsername }) => {

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
      {token && <div>{message}</div>}
      <input value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
      <input value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
      <button>Submit</button>
    </form>
  )
}

export default Login