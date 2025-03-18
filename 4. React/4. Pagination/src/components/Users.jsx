import axios from "axios";
import { useEffect, useRef, useState } from "react";
import './Users.css';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const page = useRef(1);
  const pages = useRef(0);

  const getMoreData = async (direction) => {
    const nextPage = page.current + direction;
    if (nextPage > 0 && nextPage <= pages.current) {
      setLoading(true);
      page.current = nextPage;
      try {
        const response = await axios.get(`https://dummyjson.com/users?limit=30&skip=${(nextPage - 1) * 30}`);
        setUsers(response.data.users);
      } catch (error) {
        console.log("Error fetching API");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = (await axios.get("https://dummyjson.com/users")).data;
        pages.current = Math.ceil(data.total / data.limit);
        setUsers(data.users);
      } catch (error) {
        console.log("Error fetching API");
      } finally {
        setLoading(false); 
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div className="user-container">
        {users.length === 0 ? (
          <p>No users available</p>
        ) : (
          users.map(user => (
            <div key={user.id} className="user-card">
              <img src={user.image} alt={`${user.first_name} ${user.last_name}`} />
              <h1>{`${user.firstName} ${user.lastName}`}</h1>
              <h2>{user.email}</h2>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        <button onClick={() => getMoreData(-1)} disabled={loading}>Prev</button>
        <p>{`Page ${page.current} of ${pages.current}`}</p>
        <button onClick={() => getMoreData(1)} disabled={loading}>Next</button>
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default Users;
