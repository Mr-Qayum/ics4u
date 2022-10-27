const form = document.getElementById('info');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const get = document.getElementById('get');
const post = document.getElementById('post');

get.addEventListener('click', () => {
  makeRequest("GET", "https://reqres.in/api/users")
    .then((response) => {
      return response.json();
    }).then((responseData) => {
      console.log(responseData);
    });
});

post.addEventListener('click', () => {
  makeRequest("POST", "https://reqres.in/api/register",
    {
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    }
  ).then((response) => {
    return response.json();
  }).then((responseData) => {
    console.log(responseData);
  });
});

const makeRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    headers: data ? { 'Content-Type': "application/json" } : {},
    body: JSON.stringify(data),
  });
};