export const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

export const fetchRegisterResults = async (username, password) => {
  const response = await fetch(`${BASE_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username,
        password
    }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};


export const fetchLoginResults = async (username, password) => {
    const response = await fetch(`${BASE_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username,
          password,
      }),
    });
    const data = await response.json();
    return data;
  };

export const fetchUserData = async (token) => {
  const response = await fetch(`${BASE_URL}/api/users/me`, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
};

// export const newActivity = async (
//   name,
//   description
// ) => {
//   const token = localStorage.getItem('token')
//   const result = await fetch(`${BASE_URL}/api/activities`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       'Authorization': `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//         name,
//         description
//     }),
//   });
//   const data = await result.json();
//   console.log(data);

//   return data;
// };

