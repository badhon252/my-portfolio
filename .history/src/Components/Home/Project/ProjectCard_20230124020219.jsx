import "./Projects.css"
import githubIcon from "../../../Assests/icons/github.png"

export default function ProjectCard(props) {
  return (
    <div className="card" id="card">
          <div className="card-img">
            <span><img src="" alt="" className="img-fluid" /></span>
             <img src={props.img} className="card-img-top img-fluid" alt={props.title}/>
          </div> 
        <div className="card-body">
            <h5 className="card-title my-3">{props.title}</h5>
            <span className="card-text">{props.text}</span>
            <a href={props.link} className="btn btn-sm btn-dark d-block mt-4">GitHub</a>
        </div>
    </div>
  )
}
