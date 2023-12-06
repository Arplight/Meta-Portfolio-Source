import { projects_data } from "../../../data/Projects_data";
import Project_Card from "../../Sub-Components/Project-Card/Project-Card";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="container">
        {projects_data.map((n, index) => (
          <Project_Card
            key={index}
            name={n.project_name}
            thumb={n.project_thumb}
            description={n.project_description}
            link={n.project_link}
          />
        ))}
      </div>
    </div>
  );
}
