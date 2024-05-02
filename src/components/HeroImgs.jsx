import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroImgs({heroImgs, slug, name}) {
  return (
    <>
        {
        heroImgs.map((img,i) => {
          return (                            
              <picture key={i}  >
                <Link to={'/'+slug}>
                    <img src={img} alt={`Imagen descriptiva del proyecto ${name}`} />
                </Link>
              </picture>
          )
        })
      }
    </>
  )
}
