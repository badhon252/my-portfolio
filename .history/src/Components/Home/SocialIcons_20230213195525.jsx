import React from 'react'

export default function SocialIcons({link, font}) {
  return (
    <div>
        <a href={link} target="_blank" rel="noreferrer">
         <i class="fa-brands fa-linkedin"></i>
        </a>
    </div>
  )
}
