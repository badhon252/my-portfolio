import Classes from "./Github.module.css"
import github from "../../../../../../Assests/icons/github.png";
import "../Navs.css"

export default function GitHub() {
  return (
    <div className={Classes.faBrands}>
      <a href="https://github.com/badhon252" target="_blank" rel="noreferrer">
        <img className="fa-github" src={github} alt="github" />
        </a>
    </div>
  )
}
