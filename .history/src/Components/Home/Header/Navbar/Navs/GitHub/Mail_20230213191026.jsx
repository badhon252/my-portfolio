import Classes from "./Github.module.css"
import gmail from "../../../../../../Assests/icons/gmail.svg";
import "../Navs.css"

export default function GitHub() {
  return (
    <div className={Classes.faBrands}>
      <a href="https://github.com/badhon252" target="_blank" rel="noreferrer">
        <img className="fa-github" src={gmail} alt="github" />
        </a>
    </div>
  )
}
