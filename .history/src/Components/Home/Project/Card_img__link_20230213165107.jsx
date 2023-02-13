// import githubIcon from "../../../Assests/icons/github.png"
// import redirect from "../../../Assests/icons/redirect.svg"
import "./Projects.css"
export default function Card_img__link(props) {
  
  return (
     <div className="card_img__link">
              <a href={props.link || "#"} target="_blank" rel="noreferrer" >
               <i class="fa-brands fa-github-alt"></i>
              </a>
              <a href={props.preview} target="_blank" rel="noreferrer" >
                  <i class="fa-solid fa-arrow-up-right-from-square redirect"></i>
              </a>
               
    </div>
  )
}
