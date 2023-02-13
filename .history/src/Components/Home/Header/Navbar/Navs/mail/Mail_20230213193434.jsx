import Classes from "./mail.module.css"
import gmail from "../../../../../../Assests/icons/gmail.svg";
import "../Navs.css"

export default function Mail() {
  return (
    <div className={Classes.faBrands}>
      <a href="mailto:dev.khalidhossain@gmail.com" target="_blank" rel="noreferrer">
        <img className="fa-gmail" src={gmail} alt="G-mail" />
        </a>
    </div>
  )
}
