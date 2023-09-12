import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar({ user }) {
  return (
    <nav>
      { user ?
        <>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/movies" className="nav-link">
            All Movies
          </Link>
          <Link to="/actors" className="nav-link">
            All Actors
          </Link>
          <Link to="/myec" className="nav-link">
            My eCenter
          </Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
          <Link to="/logout" className="nav-link">
            Logout
          </Link>
        </>
      :
      <>
        <Link to="/movies" className="nav-link">
          All Movies
        </Link>
        <Link to="/signin" className="nav-link">
          Login
        </Link>
      </>
      }
    </nav>
  );
}
