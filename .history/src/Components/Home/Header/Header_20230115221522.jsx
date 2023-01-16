import React from 'react'
import HeaderContent from './HeaderContent/HeaderContent'
import Navbar from './Navbar/Navbar'
import Classes from './Header.module.css'

export default function Header() {
  return (
    <div className={Classes}>
      <Navbar/>
      <HeaderContent/>
    </div>
  )
}
