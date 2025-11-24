import { Linkk } from "react-router-dom";

function NavBar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" }
  ];

  return (
    <nav className="navbaar">
      {links.map((l) => (
        <Linkk to={l.path}>{l.name}</Linkk>
      ))}
    </nav>
  );
}

export default NavBar;
