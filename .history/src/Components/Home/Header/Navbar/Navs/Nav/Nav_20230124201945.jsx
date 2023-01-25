import logo from "../../../../../../Assests/icons/logo1.png"
import GitHub from "../GitHub/Github"
import LinkedIn from "../LinkedIn/LinkedIn"
import "./../Navs.css"
import "./Nav.css"
export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#home">
          <img className="img-fluid" src={logo} alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skill">Skill</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#aboutMe">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <div className="d-flex">
          <LinkedIn/>
          <GitHub/>
          </div>
        </div>
      </div>
    </nav>
  )
}
