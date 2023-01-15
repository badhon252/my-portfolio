import React from 'react'
import LinkedIn from './LinkedIn/LinkedIn'
import GitHub from './GitHub/Github'
import Nav from './Nav/Nav'
import Classes from "./Navs.module.css"

export default function Navs() {
  return (
    <div className={Classes.flexRow}>
        <Nav/>
        <LinkedIn/>
        <GitHub/>
    </div>
  )
}
