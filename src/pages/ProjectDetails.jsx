import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section-title">Project not found</h2>
          <Link to="/" className="btn btn-primary">
            Back Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="detail-top">
        <button
            type="button"
            className="btn btn-secondary detail-back-btn"
            onClick={() => navigate(-1)}
            >
            ← Back
        </button>
        </div>

        <div className="detail-card">
          {/* 🔥 HERO AREA */}
          <div className="detail-hero">
            <div className="detail-icon">{project.icon}</div>
            <h1 className="detail-title">{project.title}</h1>
          </div>

          {/* 🔽 DESCRIPTION */}
          <div className="case-section">
            <h3> Overview</h3>
            <p>{project.overview}</p>
            </div>

            <div className="case-section">
            <h3>Responsibilities</h3>
            <ul>
                {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
            </div>

            <div className="case-section">
            <h3>Tech Stack</h3>
            <div className="project-tags">
                {project.tags.map((tag, index) => (
                <span className="project-tag" key={index}>
                    {tag}
                </span>
                ))}
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;