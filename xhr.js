const form = document.getElementById('info');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const get = document.getElementById('get');
const post = document.getElementById('post');

get.addEventListener('click', () => {
  makeRequest("GET", "https://reqres.in/api/users")
    .then((response) => {
      console.log(response);
    })
});

post.addEventListener('click', () => {
  makeRequest("POST", "https://reqres.in/api/register",
    {
      "email": "eve.holt@reqres.in",
      "password": "pistol" 
    }
  ).then((response) => {
    console.log(response);
  })
});

const makeRequest = (method, url, data = null) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = 'json';

    if (method === "POST") {
      xhr.setRequestHeader('Content-Type', "application/json");
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject("Error occurred!");
      } else {
        resolve(xhr.response);
      }
    };

    xhr.send(JSON.stringify(data));
  }
  )
};