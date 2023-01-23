import CardImgLink from "./Card_img__link"
import "./Projects.css"

export default function ProjectCard(props) {
  return (
    <div className="card" id="card">
          <div className="card-img">
           
             <img src={props.img} className="card-img-top img-fluid" alt={props.title}/>
          </div> 
        <div className="card-body">
        
            <h5 className="card-title my-2">{props.title}</h5>
            <span className="card-text">{props.text}</span>
            
        </div>
          <CardImgLink preview={props.preview} link={props.link}/>
    </div>
  )
}
