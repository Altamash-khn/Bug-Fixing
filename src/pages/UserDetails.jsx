import { useParam } from "react-router-dom"; 

function UserDetails() {
  const { userId } = useParam(); 

  return (
    <div>
      <h2>User Details Page</h2>
      <p>User ID is: {id}</p> 
    </div>
  );
}

export default UserDetails;
