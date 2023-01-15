import React from 'react'

export default function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
            
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Skill</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Project</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About-Me</a>
                    </li>
                    
                </ul>
            
                </div>
            </div>
        </nav>
    </div>
  )
}
