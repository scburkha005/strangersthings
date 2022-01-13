import { useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { login, register } from '../api';

const AccountForm = ({setToken}) => {
  const params = useParams();
  let {method} = params;
  const accountTitle = method === 'login' ? 'Log In' : 'Register';
  const [message, setMessage] = useState('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let hashMap = {
    login,
    register
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [token, message] = await hashMap[method](username, password);
    setToken(token);
    setMessage(message);
  }

  return (
    <form className='account-form' onSubmit={handleSubmit}>
      <h2>{accountTitle}</h2>
      {message && <div>{message}</div>}
      <input value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
      <input value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
      <button>{accountTitle}</button>
      <div>
        {
          method === 'login'
            ? <Link to={'/account/register'}>Don't have an account? Sign Up</Link>
            : <Link to={'/account/login'}>Already have an account? Log In</Link>
        }
      </div>
    </form>
  )
}

export default AccountForm;