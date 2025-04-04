import axios from "axios";
import { useEffect, useRef, useState } from "react";

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
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-20 justify-center m-20">
        {users.length === 0 ? (
          <p>No users available</p>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-[10px] shadow-md overflow-hidden w-[250px] text-center p-5 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-[80px] h-[80px] rounded-full mb-4"
              />
              <h1 className="text-[18px] font-semibold my-2 text-gray-800">
                {`${user.firstName} ${user.lastName}`}
              </h1>
              <h2 className="text-[14px] text-gray-600 my-1">{user.email}</h2>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center items-center gap-4 mt-5">
        <button
          onClick={() => getMoreData(-1)}
          disabled={loading}
          className="bg-blue-500 text-white text-[16px] px-4 py-2 rounded-md transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700"
        >
          Prev
        </button>
        <p className="text-[16px] text-gray-800">{`Page ${page.current} of ${pages.current}`}</p>
        <button
          onClick={() => getMoreData(1)}
          disabled={loading}
          className="bg-blue-500 text-white text-[16px] px-4 py-2 rounded-md transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700"
        >
          Next
        </button>
      </div>
      {loading && <p className="mt-3 text-gray-600">Loading...</p>}
    </div>
  );
}

export default Users;
