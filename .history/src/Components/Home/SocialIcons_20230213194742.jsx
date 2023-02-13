import React from 'react'

export default function SocialIcons({url, font}) {
  return (
    <div>
        <a href={url} target="_blank" rel="noreferrer">
          <i className={font}></i>
        </a>
    </div>
  )
}
