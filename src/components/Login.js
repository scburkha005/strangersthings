const Login = ({password, username, setPassword, setUsername}) => {

  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <input value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
      <input value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Login