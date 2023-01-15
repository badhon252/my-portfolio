import React from 'react'
import NavbarBrand from './NavbarBrand/NavbarBrand'
import Navs from './Navs/Navs'
import "./Navs/Navs.css"

export default function Navbar() {
  return (
    <div className='navBar'>
        <NavbarBrand/>
        <Navs/>
    </div>
  )
}
