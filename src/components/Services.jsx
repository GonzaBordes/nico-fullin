import identidadLogo from '../assets/img/identidad-icon.svg'
import prototipadoLogo from '../assets/img/prototipado-icon.svg'
import redesLogo from '../assets/img/redes-icon.svg'

export default function Services() {
  return (
    <section id="services">
            <h2>Servicios que ofrezco</h2>
            <ul className="not-faded-list">
                <li>
                    <h3>Prototipos web</h3>
                    <p>Creación de modelos interactivos y visuales de estructura y diseño de tu página web o aplicación siguiendo buenas prácticas de diseño UX/UI.</p>
                    <picture>
                        <img src={prototipadoLogo} alt="" />
                    </picture>
                </li>
                <li>
                    <h3>Identidad de marca</h3>
                    <p> Creación apropiada de identidad visual, para que tu negocio, marca o emprendimiento generen impacto visual en el público objetivo.</p>
                    <picture>
                        <img src={identidadLogo} alt="" />
                    </picture>
                </li>
                <li>
                    <h3>Social media</h3>
                    <p> Diseño de gráficas, feeds y posteos de tus redes sociales para impulsar tu negocio digital.</p>
                    <picture>
                        <img src={redesLogo} alt="" />
                    </picture>
                </li>
            </ul>
    </section>
  )
}
