import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) throw new Error("Kunde inte hämta användarna.");

        const data = await res.json();

        setUsers(data);
      } catch (err) {
        setError(err.message ?? "Okänt fel uppstod.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Laddar användare/users</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <section>
      <h2>Users:</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}> {user.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsersPage;
