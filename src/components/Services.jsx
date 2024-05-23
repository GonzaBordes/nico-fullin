import identidadLogo from '../assets/img/identidad-icon.svg'
import prototipadoLogo from '../assets/img/prototipado-icon.svg'
import redesLogo from '../assets/img/redes-icon.svg'
import { useTranslation } from "react-i18next";

export default function Services() {
    const {t} = useTranslation()
  return (
    <section id="services">
        <div className="container">
            <h2>Servicios que ofrezco</h2>
            <ul className="not-faded-list">
                <li>
                    <h3>{t('SERVICE ONE')}</h3>
                    <p>{t('DESCRIPTION SERVICE ONE')}</p>
                    <picture>
                        <img src={prototipadoLogo} alt="" />
                    </picture>
                </li>
                <li>
                    <h3>{t('SERVICE TWO')}</h3>
                    <p> {t('DESCRIPTION SERVICE TWO')}</p>
                    <picture>
                        <img src={identidadLogo} alt="" />
                    </picture>
                </li>
                <li>
                    <h3>{t('SERVICE THREE')}</h3>
                    <p> {t('DESCRIPTION SERVICE THREE')}</p>
                    <picture>
                        <img src={redesLogo} alt="" />
                    </picture>
                </li>
            </ul>
        </div>
           
    </section>
  )
}
