import logo from '../assets/img/logo-blanco.png'
import Socials from './Socials'
import instaLogo from '../assets/img/insta-logo.svg'
import linkedinLogo from '../assets/img/linkedin-logo.svg'
import { useTranslation } from "react-i18next";

export default function Footer() {
  const {t} = useTranslation()
  return (
    <>
       <footer>
        <div  className="container">
            <div className="footer__content">
              <span>{t('FOOTER SPAN')}</span>
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
