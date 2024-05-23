import { NavLink } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Header() { 

  const [openedNav, setOpenedNav] = useState(false)

  gsap.registerPlugin(ScrollTrigger)

  const {t} = useTranslation()
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const nav = document.querySelector('nav')
    gsap.set(nav,{opacity:0})
  }, []);

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    setLanguage(lng);
  };

  const handleBurgerClick = () => {
    const navTl = gsap.timeline()
    const nav = document.querySelector('nav')
    const header = document.querySelector('header')

    if(!openedNav){
      navTl.to(nav ,{opacity: 1, duration: .4})
      header.classList.add('nav-opened')
      setOpenedNav(true)
    }else{
      navTl.to(nav,{opacity: 0, duration: .4})
      header.classList.remove('nav-opened')
      setOpenedNav(false)
    }
  }

  const handleNavLink = () => {
    const navTl = gsap.timeline()
    const nav = document.querySelector('nav')
    const header = document.querySelector('header')

    if (openedNav){
      navTl.to(nav,{opacity: 0, duration: .4})
      header.classList.remove('nav-opened')
      setOpenedNav(false)
    }
  }

  return (
    <header>
      <div className="container">
        <h1>Porfolio de Nico Fullin</h1>
        <div className="content">
          <ThemeToggle />
          <nav>
            <ul>
              <li>
                <NavLink onClick={handleNavLink} to={'/'} >Home</NavLink>
              </li>
              <li>
                <NavLink onClick={handleNavLink} to={'/sobre-mi'}>{t('ABOUT ME MENU')}</NavLink>
              </li>
              <li>
                <NavLink onClick={handleNavLink} to={'/contacto'}>{t('CONTACT MENU')}</NavLink>
              </li>  
            </ul>
            <div className="btn-box">
                <button className={language === "es" ? 'active' : null} onClick={() => changeLanguage('es')}>ES</button>
                <button className={language === "en" ? 'active' : null} onClick={() => changeLanguage('en')}>EN</button>     
            </div>
          </nav>
          <div onClick={handleBurgerClick} className={`${openedNav ? 'active' : ''} burger-box`}>
            <span></span>
            <span></span>
            <span></span>              
          </div>
        </div>        
      </div>        
    </header>
  )
}
