import './ProjectContainer.css';

const ProjectContainer = ({project}:any) => {
  return (
    <div className="project-container">

      <div className="project-title">
        <p>{project.title}</p>
      </div>

      <div className="project-picure">
        <img src={project.logo} alt={`${project.title} logo!`} className="project-logo" />
      </div>

      <div className="project-tech">
        {project.tech.map((item:any) => (
          <div className="project-tech-item">
            {item}
          </div>
        ))}
      </div>

      <div className="project-link">
          <a href={project.link} className="project-link-title">check it out!</a>
      </div>

    </div>
)};

export default ProjectContainer;