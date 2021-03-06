import { Link } from "react-router-dom";
import './MessageSingle.css';

const MessageSingle = ({user, message: {content, fromUser: {username}, post: {title, _id}}}) => {

  return (
    <div className='messages-single'>
      {
        user.username !== username ? 
        <div>From: {username}</div> :
        <div>(Sent By Me)</div>
      }
      <div>{content}</div>
      {
        user.username !== username ?
        <Link to={`/posts/${_id}`}>View My Post: {title}</Link> :
        <Link to={`/posts/${_id}`}>Message Again: {title}</Link>
      }
    </div>
  )
}

export default MessageSingle;