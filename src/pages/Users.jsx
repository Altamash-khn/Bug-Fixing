import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState({ name: "Ayan" });

  const navigate = useNavigate();

  const goToUser = (id) => {
    nevigate(`/user/${id}`);
  };

  return (
    <div>
      <h1>Users List</h1>

      {users.map((u, i) => (
        <div onClick={() => goToUser(u.id)}>
          {u.nam} 
        </div>
      ))}
    </div>
  );
}

export default Users;
