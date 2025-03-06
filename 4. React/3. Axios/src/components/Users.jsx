import axios from "axios";
import { useEffect, useState } from "react";
import './Users.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      setUsers((await axios.get("https://dummyjson.com/users")).data.users);
    };

    getData();
  }, []);

  return (
    <div className="user-container">
      {users && users.map(user => (
        <div className="user-card" key={user.id}>
          <img className="user-avatar" src={user.image} alt={`${user.firstName} ${user.lastName}`} />
          <h1>{`${user.firstName} ${user.lastName}`}</h1>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  );
}

export default Users;
