import { FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/beko.jpg";

function Hero() {
  const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
  
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-left">

          <h2>
            SAP S/4HANA development for cloud, integration, and scalable enterprise systems.
          </h2>

          <p>
            I specialize in ABAP development, SAP BTP integrations, RAP, CDS, and OData services, 
            building scalable and maintainable solutions across 
            Public Cloud, Private Cloud, and on-premise environments.
          </p>

          <div className="hero-buttons">
            <button type="button"
              className="btn btn-primary hero-action-btn"
              onClick={() => scrollToSection("projects")}
            > View Projects
            </button>

            

            <a href="/cv.pdf" className="btn btn-secondary" target="_blank" rel="noreferrer">
              Download CV
            </a>

            <a href="https://www.linkedin.com/in/berkay-%C3%B6zdemir/"
              className="btn btn-secondary icon-btn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

           <button
            type="button"
            className="btn btn-secondary hero-action-btn"
            onClick={() => scrollToSection("contact")} >
              Contact Me
          </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat">
              <h3>S/4HANA</h3>
              <p>Public & Private Cloud</p>
            </div>

            <div className="stat">
              <h3>BTP</h3>
              <p>ABAP Cloud & Integrations</p>
            </div>

            <div className="stat">
              <h3>Modules</h3>
              <p>MM, FI, SD, EWM, PP, QM, CO, PPDS</p>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <img src={profileImg} alt="Berkay" className="profile-image" />
          <h3>Berkay Özdemir</h3>

          <div className="profile-pills">
          <span className="profile-pill">ABAP Cloud</span>
          <span className="profile-pill">RAP</span>
          <span className="profile-pill">CDS</span>
          <span className="profile-pill">OData</span>
          <span className="profile-pill">BTP</span>
          <span className="profile-pill">S/4HANA</span>
  </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;