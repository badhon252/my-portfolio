import "./../Navs.css"
import "./Nav.css"
export default function Nav() {
  return (
    <div>
        <nav className="" >
            <div className="container-fluid">
            
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="flexRow navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#skill">Skill</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#project">Project</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#aboutMe">About-Me</a>
                    </li>
                     <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    
                </ul>
            
                </div>
            </div>
        </nav>
    </div>
  )
}
