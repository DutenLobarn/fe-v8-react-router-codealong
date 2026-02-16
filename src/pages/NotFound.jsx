import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section>
      <h2>404 - Not Found</h2>
      <p>Denna sida finns inte i applikationen.</p>
      <Link to="/">Tillbaka till Home</Link>
    </section>
  );
}

export default NotFoundPage;
