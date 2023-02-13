import "./SocialIcons.css"
import gmailIcon from "../../../Assests/icons/gmail.svg"

export default function SocialIcons() {
  return (
    <div className='icons'> 
      <a href="mailto:dev.khalidhossain@gmail.com" target="_blank" rel="noreferrer">
         <img src="" alt="gmail" className="img-fluid w-100" />
      </a>
      <a href="https://www.linkedin.com/in/khalidhossainbadhon/" target="_blank" rel="noreferrer">
         <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/badhon252" target="_blank" rel="noreferrer">
         <i class="fa-brands fa-github"></i>
      </a>
    </div>
  )
}
