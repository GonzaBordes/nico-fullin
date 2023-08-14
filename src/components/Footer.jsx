import logo from '../assets/img/logo-blanco.png'
import Socials from './Socials'
import instaLogo from '../assets/img/insta-logo.svg'
import linkedinLogo from '../assets/img/linkedin-logo.svg'

export default function Footer() {
  return (
    <>
       <footer>
        <div  className="container">
            <div className="footer__content">
              <span>Me encantaría conocer tu proyecto y ayudarte a darle la forma que necesita para crecer. ¡No dudes en contactarme!</span>
              <Socials/>
            </div>           
            <div className="footer-logo__wrapper">
                <img src={logo} alt="Logotipo de Nico Fullin" />
               <div className="insta-linkedin">
                <a href="https://www.instagram.com/fullingraficos/" target='_blank'>
                  <img src={instaLogo} alt="logo de instagram" />
                </a>
                <a href="https://www.linkedin.com/in/nicolas-fullin-758bb6216/" target='_blank'>
                  <img src={linkedinLogo} alt="logo de linkedin" />
                </a>
               </div>
            </div>
        </div>
      </footer>
    </>
   
  )
}
