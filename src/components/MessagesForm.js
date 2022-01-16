import { useState } from 'react';
import { sendMessage } from '../api';
import Button from '@mui/material/Button';
import './MessagesForm.css';

const MessagesForm = ({token, postid}) => {
  const blankMessage = {
    content: ''
  }
  const [message, setMessage] = useState(blankMessage);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await sendMessage(token, postid, message);
    console.log(data);
  }

  return (
    <form className='messages-form' onSubmit={handleSubmit}>
      <input type='text' value={message.content} placeholder='send a message' onChange={(e) => setMessage({content: e.target.value})}/>
      <Button variant='contained'>Send</Button>
    </form>
  )
}

export default MessagesForm;