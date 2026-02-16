import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>React Router</h1>

        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <br></br>
          <NavLink to="/about">About</NavLink>
          <br></br>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
