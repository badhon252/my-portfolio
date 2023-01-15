import React from 'react'
import LinkedIn from './LinkedIn/LinkedIn'
import GitHub from './GitHub/Github'
import Nav from './Nav/Nav'
import "./Navs.css"

export default function Navs() {
  return (
    <div className='flexRow'>
        <Nav/>
        <LinkedIn/>
        <GitHub/>
    </div>
  )
}
