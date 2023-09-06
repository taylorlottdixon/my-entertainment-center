import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar({ user }) {
  return (
    <nav>
      <Link to="/" className="nav-link">
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
      <p>Welcome, {user.username}!</p>
    </nav>
  );
}
