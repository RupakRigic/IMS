import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
   getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + "/users");
      console.log(response);
      setUsers(response.data);
    } catch (err) {
      setError("Error fetching users");
    }
  }

  return (
    <>
      {error && <p>{error}</p>}

      <ul>
        {users?.name}
      </ul>
    </>
  );
}

export default App;
