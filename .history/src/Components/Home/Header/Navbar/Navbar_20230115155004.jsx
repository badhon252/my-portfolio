import React from 'react'
import NavbarBrand from './NavbarBrand/NavbarBrand'
import Navs from './Navs/Navs'

export default function Navbar() {
  return (
    <div className='flexRow'>
        <NavbarBrand/>
        <Navs/>
    </div>
  )
}