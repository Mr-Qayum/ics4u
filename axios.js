const page = document.getElementById('page');
const get1 = document.getElementById('get1');
const post1 = document.getElementById('post1');
const get2 = document.getElementById('get2');
const post2 = document.getElementById('post2');

get1.addEventListener('click', async () => {
  axios.get("https://reqres.in/api/users")
    .then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
      console.log("An error occurred!");
    });
});

get2.addEventListener('click', async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users",
      {
        params: { 
          page: page.value,
        }
      });
    console.log(response.data);
  } catch (error) {
    console.log(error);
    console.log("An error occurred!");
  }
});

post1.addEventListener('click', () => {
  axios.post("https://reqres.in/api/register",
    {
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    },
    {
      headers: {
        'Content-Type': "application/json",
      }
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
      console.log("An error occurred!");
    });
});

post2.addEventListener('click', async () => {
  try {
    let response = await axios.post("https://reqres.in/api/register",
      {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      },
      {
        headers:
        {
          'Content-Type': "application/json",
        }
      });
    console.log(response.data);
  } catch (error) {
    console.log(error);
    console.log("An error occurred!");
  };
});