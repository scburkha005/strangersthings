import MessageSingle from "./MessageSingle";

const Profile = ({user, user: {messages}}) => {
  const receivedMessages = messages.filter((message) => {
    return message.fromUser.username !== user.username;
  });
  const sentMessages = messages.filter((message) => {
    return message.fromUser.username === user.username;
  })
  return (
    <div className='user-profile'>
      <h4>Messages Received</h4>
      {receivedMessages.length > 0 ? receivedMessages.map((message)=> <MessageSingle key={message._id} message={message} user={user} />) : <div>No Messages Received</div>}
      <h4>Messages Sent</h4>
      {sentMessages.length > 0 ? sentMessages.map((message)=> <MessageSingle key={message._id} message={message} user={user} />) : <div>No Messages Received</div>}
    </div>
  )
}

export default Profile;