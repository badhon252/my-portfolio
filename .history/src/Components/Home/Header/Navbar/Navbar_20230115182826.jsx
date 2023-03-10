import React from 'react'
import NavbarBrand from './NavbarBrand/NavbarBrand'
import Navs from './Navs/Navs'
import "./Navs/Navs.css"
import Nav from './Navs/Nav/Nav'

export default function Navbar() {
  return (
    <div className='navBar'>
        <NavbarBrand/>
         <Nav/>
         <LinkedIn />
        <GitHub/>
    </div>
  )
}
