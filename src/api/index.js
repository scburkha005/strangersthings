const cohortName = "2110-FTB-PT-WEB-PT"
const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`

export const fetchPosts = async (token) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const {data: {posts}} = await response.json();
    console.log(posts)
    return posts
  } catch (err) {
    console.error(err);
  }
}

export const apiCalls = async ({token, url, method, body}) => {
  try {
    const options = {
      method: method ? method.toUpperCase() : "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${url}`, options)
    const data = await response.json();
    if (data.error) {
      throw data.error;
    } 
  } catch (err) {
    console.error(err);
  }
}

export const register = async (username, password) => {
  try {
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
    const token = '';
    if (responseObject.data) {
      const {data: { message}} = responseObject;
      return [token, message];
    } else {
      const {error: {message}} = responseObject;
      return [token, message]
    }
  } catch (err) {
    console.error(err);
  }
}

export const login = async(username, password) => {
  try {
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
  } catch (err) {
    console.error(err);
  }
}

export const checkUser = async (token) => {
  try {
    const response = await fetch(`${API_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const userObject = await response.json();
    if (userObject.success) {
      return userObject.data;
    }
    return userObject;
  } catch (err) {
    console.error(err);
  }
}

export const createPost = async (token, postObject) => {
  try {
    console.log('postObject', postObject)
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({post: postObject})
    })
    const {data: {post: singlePost}} = await response.json();
    return singlePost;
  } catch (err) {
    console.error(err);
  }
}

export const deletePost = async (POST_ID, token) => {
  try {
    await fetch(`${API_URL}/posts/${POST_ID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  } catch (err) {
    console.error(err);
  }
}