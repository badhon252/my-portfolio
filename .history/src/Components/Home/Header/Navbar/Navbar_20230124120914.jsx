import "./Navs/Navs.css"
import "./Navbar.css"
import Nav from './Navs/Nav/Nav'
// import NavbarBrand from './NavbarBrand/NavbarBrand'
// import LinkedIn from './Navs/LinkedIn/LinkedIn'
// import GitHub from './Navs/GitHub/Github'

export default function Navbar() {
  return (
    <div className='navBar borderBottom'>
            <Nav/>
         {/* <div className='navBar'>
            <LinkedIn/>
            <GitHub/>
         </div> */}
    </div>
  )
}
