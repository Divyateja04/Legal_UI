import { Link, useLocation } from "react-router-dom";
import "./AppNavBar.css";

export default function AppNavBar() {
  const location = useLocation();

  return (
    <nav className="app-navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <div className="app-logo">
          <Link to="/" className="logo-link">
            <span>Legal</span> AI
          </Link>
        </div>


        {/* Menu */}
        <ul className="app-nav-menu">
          <li className={location.pathname === "/upload" ? "active" : ""}>
            <Link to="/upload">Upload</Link>
          </li>

          <li className={location.pathname === "/summary" ? "active" : ""}>
            <Link to="/summary">Summary</Link>
          </li>

          <li className={location.pathname === "/legal-info" ? "active" : ""}>
            <Link to="/legal-info">Legal Info</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
