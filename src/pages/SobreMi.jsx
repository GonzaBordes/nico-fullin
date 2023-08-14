import Socials from "../components/Socials"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { Power1 } from "gsap";

export default function SobreMi() {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    
    const sobreMiTl = gsap.timeline({
      scrollTrigger:{
        trigger: document.querySelector('.sobremi-section')
      }
    })

    const heroLeftContent = document.querySelector('.sobremi-content-left')
    const heroRightContent = document.querySelector('.sobremi-content-right')

    sobreMiTl.fromTo(heroLeftContent,{opacity:0, x: -200},{opacity:1, x:0, duration:1 ,ease: Power1.easeOut})
    sobreMiTl.fromTo(heroRightContent,{scale:1.4, opacity:0,y:50, x:100},{scale:1, y:0, opacity:1, x:0, duration: 1, ease: Power1.easeOut}, '-=.8')

  }, []);

  return (
    <>
      <main id="sobremi" className="container">
        <section id="hero" className="sobremi-section">
          <div className="sobremi-content-left not-faded" >
            <h2>Diseñador gráfico con pasiones más allá del diseño.</h2>
            <Socials/>
            <a download href="cv.pdf" className="cv-link">Descargar CV 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1A1A1A" className="i8-icon i8-button__icon"><path d="M5.75 3C4.24 3 3 4.24 3 5.75v3a.751.751 0 1 0 1.5 0v-3c0-.7.55-1.25 1.25-1.25h3a.751.751 0 1 0 0-1.5h-3Zm9.5 0a.751.751 0 1 0 0 1.5h3c.7 0 1.25.55 1.25 1.25v3a.751.751 0 1 0 1.5 0v-3C21 4.24 19.76 3 18.25 3h-3ZM3.738 14.49a.749.749 0 0 0-.738.76v3C3 19.76 4.24 21 5.75 21h3a.751.751 0 1 0 0-1.5h-3c-.7 0-1.25-.55-1.25-1.25v-3a.748.748 0 0 0-.762-.76Zm16.5 0a.749.749 0 0 0-.738.76v3c0 .7-.55 1.25-1.25 1.25h-3a.75.75 0 1 0 0 1.5h3c1.51 0 2.75-1.24 2.75-2.75v-3a.748.748 0 0 0-.762-.76Zm-8.265-7.489a.75.75 0 0 0-.467.198l-3.25 3a.75.75 0 1 0 1.017 1.102l1.992-1.838v6.787a.751.751 0 1 0 1.5 0V9.463l1.99 1.838a.749.749 0 0 0 1.273-.577.75.75 0 0 0-.255-.525l-3.25-3a.75.75 0 0 0-.55-.198Z"/></svg>
            </a>     
          </div>
          <div className="scale-up sobremi-content-right">
            <p>Soy un diseñador gráfico con una gran pasión por mi trabajo. Me encanta crear diseños únicos y creativos que transmitan un mensaje claro y efectivo. Además, tengo intereses que van más allá del diseño. Desde muy joven, siempre he sido un gran aficionado a la música, especialmente al rock clásico. Me encanta tocar la guitarra y componer canciones en mi tiempo libre, lo cual me permite expresar mi creatividad de una manera completamente diferente a la del diseño gráfico.</p>
            <p> Disfruto mucho de la lectura y siempre estoy buscando nuevos libros para agregar a mi biblioteca. Me gusta leer sobre diferentes temas, desde la historia hasta la filosofía y la psicología, y creo que esto me permite tener una perspectiva más amplia y profunda en mi trabajo como diseñador gráfico.</p>
            <p>Por último, me apasiona la naturaleza y me gusta pasar tiempo al aire libre siempre que puedo. Disfruto mucho de hacer senderismo, acampar y explorar nuevas áreas naturales. Creo que esta conexión con la naturaleza me ayuda a estar más inspirado y creativo en mi trabajo como diseñador gráfico, ya que me permite tener una perspectiva más fresca y natural en mis diseños.</p>
          </div>
        </section>
      </main>
    </>
  )
}
