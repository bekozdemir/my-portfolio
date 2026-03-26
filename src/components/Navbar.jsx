import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo">Berkay</div>

        <nav className="nav-links">
          <button type="button" onClick={() => handleNavClick("projects")}>
            Projects
          </button>
          <button type="button" onClick={() => handleNavClick("certificates")}>
            Certificates
          </button>
          <button type="button" onClick={() => handleNavClick("contact")}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;