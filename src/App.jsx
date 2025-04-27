import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./Navbar.jsx";
import HomePage from "./HomePage.jsx";
import FavoritePage from "./FavoritePage.jsx";

function App() {
  const url = "https://randomuser.me/api/?results=5";
  const [users, setUsers] = useState([]); // tableau où je stocke les utilisateurs

  const getUsers = async () => {
    const request = await fetch(url);
    const data = await request.json();
    setUsers(data.results);
    console.log("Données attendues users", data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Projet : React users</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage users={users} setUsers={setUsers} />}
          />
          <Route
            path="/favorites"
            element={<FavoritePage users={users} setUsers={setUsers} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
