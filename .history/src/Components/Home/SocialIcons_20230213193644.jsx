import React from 'react'

export default function SocialIcons({url}) {
  return (
    <div>
        <a href={url} target="_blank" rel="noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
    </div>
  )
}
