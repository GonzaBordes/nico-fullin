
import behanceLogo from '../assets/img/behance-logo.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function Socials() {
  const {t} = useTranslation()
  return (
    <div className="footer__socials">
                <div className="contact__link">
                    <Link to={'/contacto'}>{t('SOCIAL CONTACT')}</Link>
                </div>
                <div className="social-links">
                      <a href="https://www.behance.net/fullingraficos" target='_blank'>
                        <img src={behanceLogo} alt="logo de behance" />
                        {t('MORE PROJECTS')}
                      </a>
                </div>
    </div>
  )
}
