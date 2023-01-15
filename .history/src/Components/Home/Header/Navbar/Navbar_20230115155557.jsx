import React from 'react'
import NavbarBrand from './NavbarBrand/NavbarBrand'
import Navs from './Navs/Navs'
import "./Navs/Navs.module.css"

export default function Navbar() {
  return (
    <div className='flexRow'>
        <NavbarBrand/>
        <Navs/>
    </div>
  )
}
