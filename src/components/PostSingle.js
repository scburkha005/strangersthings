const PostSingle = ({children, post: {title, description, price, willDeliver}}) => {
 
  return (
    <div className='singlePost'>
      <h4>{title}</h4>
      <div>{description}</div>
      <div>{price}</div>
      {willDeliver ? <div>Delivery Available!</div> : <div>Delivery Unavailable :[</div>}
      {children}
    </div>
  )
}

export default PostSingle;