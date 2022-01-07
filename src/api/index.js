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
  if (responseObject.token) {
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
  if (responseObject.token) {
    const {data: {token, message}} = responseObject;
    return [token, message];
  } else {
    const token = '';
    const {error: {message}} = responseObject;
    return [token, message];
  }
}

export const getUser = async () => {

}