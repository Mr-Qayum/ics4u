import axios from "axios";
import { useEffect, useState } from "react";
import './User.css';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      setUsers((await axios.get("https://reqres.in/api/users?page=1")).data.data);
    };

    getData();
  }, []);

  return (
    <div className="user-container">
      {users.map(user => (
        <div className="user-card" key={user.id}>
          <img className="user-avatar" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <h1>{`${user.first_name} ${user.last_name}`}</h1>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  );
}

export default User;
