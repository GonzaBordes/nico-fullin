

import Marquee from 'react-fast-marquee'

export default function ImgMarquee({images}) {

    console.log(images)

  return (
    <Marquee speed={80}>
        {
            images.map(image =>{
                return (
                    <picture key={image} className='.main-img'>
                        <img src={image} alt="Foto descriptiva del proyecto mostrado" />
                    </picture>
                )
            })
        }
    </Marquee>
        
  )
}
