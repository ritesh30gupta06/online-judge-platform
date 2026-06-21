import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">

      <Link to="/problems">
        Online Judge
      </Link>

      <div className="nav-links">

        <Link to="/problems">
          Problems
        </Link>

        <Link to="/submissions">
          Submissions
        </Link>

        <Link to="/">
          Logout
        </Link>

      </div>

    </div>
  );
}

export default Navbar;