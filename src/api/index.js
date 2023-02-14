export const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

export const fetchRegisterResults = async (username, password) => {
  const response = await fetch(`${BASE_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();
  return data;
};


export const fetchLoginResults = async (username, password) => {
    const response = await fetch(`${BASE_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const data = await response.json();
    return data;
  };

export const fetchUserData = async () => {
  const response = await fetch(`${BASE_URL}/api/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TOKEN_STRING_HERE'
    },
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
  }

