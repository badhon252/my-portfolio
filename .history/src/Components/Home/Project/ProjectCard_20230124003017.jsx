import "./Projects.css"
export default function ProjectCard(props) {
  return (
    <div id="card" style={{width: "18rem"}}>
        <img src={props.img} className="card-img-top" alt={props.title}/>
        <div className="card-body">
            <span className="card-title">{props.title}</span>
            <p className="card-text">{props.text}</p>
            <a href={props.link} className="btn btn-primary">GitHub</a>
        </div>
    </div>
  )
}
