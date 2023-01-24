import "./Projects.css"
export default function ProjectCard(props) {
  return (
    <div className="card" id="card">
          <div className="card-img">
             <img src={props.img} className="card-img-top img-fluid" alt={props.title}/>
          </div> 
        <div className="card-body">
            <h5 className="card-title my-3">{props.title}</h5>
            <span className="card-text mb-3">{props.text}</span>
            <a href={props.link} className="btn btn-sm btn-dark d-block">GitHub</a>
        </div>
    </div>
  )
}
