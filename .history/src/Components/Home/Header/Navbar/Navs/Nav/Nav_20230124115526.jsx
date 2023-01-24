import "./../Navs.css"
import "./Nav.css"
export default function Nav() {
  return (
    <div>
    

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">khalid</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Skill</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Project</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#aboutMe">About</a>
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
