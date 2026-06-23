import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/problems" className="logo">
        Online Judge
      </Link>

      <div className="nav-links">
        <Link to="/problems">Problems</Link>
        <Link to="/submissions">Submissions</Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;