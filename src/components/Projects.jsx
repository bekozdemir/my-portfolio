import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects.js";

function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (e, projectId) => {
    e.preventDefault();

    sessionStorage.setItem("homeScrollY", String(window.scrollY));
    e.currentTarget.classList.add("clicked");

    setTimeout(() => {
      navigate(`/projects/${projectId}`);
    }, 150);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-text">
          A selection of systems and solutions I have worked on.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              className="project-link"
              key={project.id}
              onClick={(e) => handleProjectClick(e, project.id)}
            >
              <article className="project-card">
                <h3>{project.title}</h3>

                <div className="project-meta">
                  <span>{project.client}</span>
                  <span>{project.role}</span>
                  <span>{project.year}</span>
                </div>

                <p>{project.overview}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="project-cta">View Details →</span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;