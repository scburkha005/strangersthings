const cohortName = "2110-FT-PT-WEB-PT"
const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  const data = await response.json();
  const posts = data.data.posts;
  return posts
}

export const register = async (username, password) => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username,
        password
      }
    })
  });
  const responseObject = await response.json()
  console.log(responseObject)
  if (responseObject.data.token) {
    const {data: {token, message}} = responseObject;
    return [token, message];
  } else {
    const token = '';
    const {error: {message}} = responseObject;
    return [token, message]
  }
}

export const login = async(username, password) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username,
        password
      }
    })
  }); 
  const responseObject = await response.json();
  console.log(responseObject)
  if (responseObject.data.token) {
    const {data: {token, message}} = responseObject;
    return [token, message];
  } else {
    const token = '';
    const {error: {message}} = responseObject;
    return [token, message];
  }
}

export const checkUser = async (token) => {
  const response = await fetch(`${API_URL}/test/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  const userCheckObject = await response.json();
  if (userCheckObject.data) {
    const {data: {message, user: {username}}} = userCheckObject;
    return [message, username];
  } else {
    const username = '';
    const {error: {message}} = userCheckObject;
    return [message, username];
  }
  return 
}