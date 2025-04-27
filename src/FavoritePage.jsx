import User from "./User";

function FavoritePage({ users, setUsers }) {
  return (
    <>
      <h1>Users Favorites</h1>

      <ul>
        {users
          .filter((u) => u.favorites)
          .sort((u1, u2) => u1.name.last.localeCompare(u2.name.last))
          .map((u, index) => (
            <User
              key={index}
              user={u}
              i={index}
              users={users}
              setUsers={setUsers}
            />
          ))}
      </ul>
    </>
  );
}

export default FavoritePage;
