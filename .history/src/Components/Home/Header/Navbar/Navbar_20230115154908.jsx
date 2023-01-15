import React from 'react'
import NavbarBrand from './NavbarBrand/NavbarBrand'
import Navs from './Navs/Navs'
import Classes from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div >
        <NavbarBrand/>
        <Navs/>
    </div>
  )
}
