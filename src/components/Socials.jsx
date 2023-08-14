
import behanceLogo from '../assets/img/behance-logo.svg'
import { Link } from 'react-router-dom'

export default function Socials() {
  return (
    <div className="footer__socials">
                <div className="contact__link">
                    <Link to={'/contacto'}>Contacto</Link>
                </div>
                <div className="social-links">
                      <a href="https://www.behance.net/fullingraficos" target='_blank'>
                        <img src={behanceLogo} alt="logo de behance" />
                        Más Proyectos
                      </a>
                </div>
    </div>
  )
}
