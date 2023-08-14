import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { Power1 } from "gsap";

export default function Contacto() {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const heroSection = document.querySelector('#hero')

    gsap.fromTo(heroSection,{scale:1.4, opacity:0,y: 100, x:100},{scale:1, y:0,delay: .2, opacity:1, x:0, duration: .8, ease: Power1.easeOut})

  }, []);

  return (
    <main className="container">
      <section className="scale-up contacto" id="hero">
          <h2>Hablemos para trabajar juntos en tu próximo proyecto<span>!</span></h2>
          <p>No dudes en contactarme para consultas o una charla virtual. ¡Hablemos sobre cómo puedo ayudarte a mejorar la experiencia de usuario y el diseño de tu negocio!</p>
          <ul>
            <li>
              <div className="contact-box">
                <h3 className="grey__desc">Email</h3>
                <p>nicolas@fullin.com.ar</p>
              </div>
            </li>
            <li>
              <div className="contact-box">
                <h3 className="grey__desc">Whatsapp</h3>
                <p>+54 9 1150366132</p>
              </div>
            </li>
            <li>
              <div className="contact-box">
                <h3 className="grey__desc">Linkedin</h3>
                <p>https://www.linkedin.com/in/nicolas-fullin-758bb6216/</p>
              </div>
            </li>
            <li>
              <div className="contact-box">
                <h3 className="grey__desc">Instagram</h3>
                <p>www.instagram.com/fullingraficos/</p>
              </div>
            </li>
        </ul>
      </section>
    </main>    
  )
}
