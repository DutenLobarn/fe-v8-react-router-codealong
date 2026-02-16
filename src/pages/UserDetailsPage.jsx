import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetailsPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );

        if (!res.ok) throw new Error("Kunde inte hämta användarens-detaljer.");

        const data = await res.json();

        setUser(data);
      } catch (err) {
        setError(err.message ?? "Okänt fel uppstod.");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  if (loading) return <p>Laddar användare/user</p>;
  if (error) return <p>Fel: {error}</p>;
  if (!user) return <p>Ingen användare hittades.</p>;

  return (
    <section>
      <h2>Användar detaljer</h2>

      <p>{user.name}</p>
      <p>{user.email}</p>

      <button onClick={() => navigate(-1)}>Tillbaka</button>
      {/* <button onClick={() => navigate("/users")}>
        Tillbaka till användarlistan
      </button> */}
    </section>
  );
}

export default UserDetailsPage;
