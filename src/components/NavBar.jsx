import { Linkk } from "react-router-dom"; // ❌ wrong import

function NavBar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" }
  ];

  return (
    <nav className="navbaar"> {/* ❌ wrong classname */}
      {/* ❌ missing key, ❌ wrong component (Linkk) */}
      {links.map((l) => (
        <Linkk to={l.path}>{l.name}</Linkk>
      ))}
    </nav>
  );
}

export default NavBar;
