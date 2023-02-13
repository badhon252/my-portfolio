import "./LinkedIn.module.css"
import linkedin from "../../../../../../Assests/icons/linkedin.svg";

export default function LinkedIn() {
  return (
    <div className={Classes.linkedin} >
      <a href="https://www.linkedin.com/in/khalidhossainbadhon/" target="_blank" rel="noreferrer">
      <img src={linkedin} alt="" />
      </a>
    </div>
  )
}
