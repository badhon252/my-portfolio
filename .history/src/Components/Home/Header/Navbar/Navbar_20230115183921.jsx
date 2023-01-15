import React from 'react'
import NavbarBrand from './NavbarBrand/NavbarBrand'
import "./Navs/Navs.css"
import Nav from './Navs/Nav/Nav'
import LinkedIn from './Navs/LinkedIn/LinkedIn'
import GitHub from './Navs/GitHub/Github'

export default function Navbar() {
  return (
    <div className='navBar borderBottom'>
            <NavbarBrand/>
            <Nav/>
         <div className='navBar'>
            <LinkedIn/>
            <GitHub/>
         </div>
    </div>
  )
}
