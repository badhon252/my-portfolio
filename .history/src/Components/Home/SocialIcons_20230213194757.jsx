import React from 'react'

export default function SocialIcons({link, font}) {
  return (
    <div>
        <a href={link} target="_blank" rel="noreferrer">
          <i className={font}></i>
        </a>
    </div>
  )
}
