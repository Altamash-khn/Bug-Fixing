import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  // ❌ wrong initial state (object instead of array)
  const [users, setUsers] = useState({ name: "Ayan" });

  const navigate = useNavigate();

  const goToUser = (id) => {
    // ❌ typo
    nevigate(`/user/${id}`);
  };

  return (
    <div>
      <h1>Users List</h1>

      {/* ❌ users.map will crash because users is not an array */}
      {users.map((u, i) => (
        <div onClick={() => goToUser(u.id)}>
          {u.nam} {/* ❌ typo: nam */}
        </div>
      ))}
    </div>
  );
}

export default Users;
