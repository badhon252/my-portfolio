import logo from "../../../../../../Assests/icons/logo.svg"
import GitHub from "../GitHub/Github"
import LinkedIn from "../LinkedIn/LinkedIn"
import "./../Navs.css"
import "./Nav.css"
export default function Nav() {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img className="img-fluid" src={logo} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home"><i class="fa-solid fa-house"></i> Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skill"><i class="fa-solid fa-code"></i> Expertise</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects"><i class="fa-solid fa-briefcase"></i> Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#aboutMe"><i class="fa-solid fa-address-card"></i> About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact"><i class="fa-solid fa-address-book"></i> Contact</a>
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
