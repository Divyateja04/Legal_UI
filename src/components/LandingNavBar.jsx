import { Link } from "react-router-dom";
import "./LandingNavBar.css";

export default function LandingNavBar() {
  return (
    <nav className="landing-navbar fixed-top">
      <div className="ln-container">

        {/* Brand */}
        <div className="ln-brand">Legal AI</div>

        {/* Links */}
        <ul className="ln-links">

          <li><a href="#features">Features</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#platform">Platform</a></li>
          <li><a href="#usecases">Use Cases</a></li>
          <li><a href="#testimonials">Testimonials</a></li>

        </ul>

        {/* CTA */}
        <Link to="/upload" className="ln-cta-btn">
          Get Started
        </Link>

      </div>
    </nav>
  );
}
