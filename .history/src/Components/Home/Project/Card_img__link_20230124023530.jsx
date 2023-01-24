import githubIcon from "../../../Assests/icons/github.png"
import redirect from "../../../Assests/icons/redirect.svg"
import "./Projects.css"
export default function Card_img__link(props) {
  return (
     <div className="card_img__link">
              <a href={props.link} >
                <img src={githubIcon} alt="" className="img-fluid githubIcon" />
              </a>
              <a href={props.preview} >
                   <img src={redirect} alt="" className="img-fluid " /><i class="fa-solid fa-arrow-up-right-from-square redirect"></i>
              </a>
               
    </div>
  )
}
