import "./Projects.css"
export default function ProjectCard(props) {
  return (
    <div id="card">
        <img src={props.img} className="card-img-top" alt={props.title}/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <span className="card-text">{props.text}</span>
            <a href={props.link} className="btn btn-primary">GitHub</a>
        </div>
    </div>
  )
}
