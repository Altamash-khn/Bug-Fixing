import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <div>
      <NavBar />

      {/* ❌ BUGS:
          - Route path typo
          - Wrong component name
      */}
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/userss" element={<Users />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
