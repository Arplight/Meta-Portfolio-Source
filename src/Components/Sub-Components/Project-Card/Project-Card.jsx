import { BsArrowRight } from "react-icons/bs";
export default function Project_Card(Props) {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={Props.thumb} alt={Props.name} />
      </div>
      <div className="card-info">
        <h3>{Props.name}</h3>
        <p>{Props.description}</p>
        <a href={Props.link} target="blank">
          See More
          <BsArrowRight className="arrow" />
        </a>
      </div>
    </div>
  );
}
