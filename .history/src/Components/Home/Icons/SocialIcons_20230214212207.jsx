import "./SocialIcons.css"
import gmailIcon from "../../../Assets/icons/gmail.svg"

export default function SocialIcons() {
  return (
    <div className='icons'> 
      <a href="mailto:dev.khalidhossain@gmail.com" target="_blank" rel="noreferrer">
         <img src={gmailIcon} alt="gmail" className="img-fluid" />
      </a>
      <a href="https://www.linkedin.com/in/khalidhossainbadhon/" target="_blank" rel="noreferrer">
         <i className="fa-brands fa-linkedin" alt="LinkedIn"></i>
      </a>
      <a href="https://github.com/badhon252" target="_blank" rel="noreferrer">
         <i className="fa-brands fa-github" alt="GitHub"></i>
      </a>
    </div>
  )
}
