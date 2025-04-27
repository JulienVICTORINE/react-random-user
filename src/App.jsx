import { useEffect, useState } from "react";

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
      <ul>
        {users
          .sort((u1, u2) => {
            u1.name.last.localeCompare(u2.name.last);
          })
          .map((u, index) => {
            return (
              <li key={index}>
                {u.name.last} {u.name.first} - {u.phone}{" "}
                <span
                  className="star"
                  onClick={(e) => e.target.classList.toggle("active")}
                >
                  {" "}
                  &#9734;{" "}
                </span>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default App;
