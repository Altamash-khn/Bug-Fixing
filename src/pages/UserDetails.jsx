import { useParam } from "react-router-dom"; // ❌ wrong hook

function UserDetails() {
  const { userId } = useParam(); // ❌ wrong variable name

  return (
    <div>
      <h2>User Details Page</h2>
      <p>User ID is: {id}</p> {/* ❌ "id" not defined */}
    </div>
  );
}

export default UserDetails;
