import githubIcon from "../../../Assests/icons/github.png"
import redirect from "../../../Assests/icons/redirect.svg"
import "./Projects.css"
export default function Card_img__link(props) {
  return (
     <div className="card_img__link">
              <a href={props.link} className="card-cons">
                <img src={githubIcon} alt="" className="img-fluid githubIcon" />
              </a>
              <a href={props.preview} className="card-cons">
                   <img src={redirect} alt="" className="img-fluid redirect" />
              </a>
               
    </div>
  )
}
