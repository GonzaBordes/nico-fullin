

import Services from "../components/Services";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Power1 } from "gsap";
import FirebaseProjectList from "../components/FirebaseProjectList";
import { useTranslation } from "react-i18next";

import WebsiteLayout from "../layouts/WebsiteLayout";


export default function Home() {

  const {t} = useTranslation()

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {

    const leftBg = document.querySelector('.background .red-blur')
    const rightBg = document.querySelector('.background .blue-blur')

    setTimeout(() => {
      leftBg.style.backgroundColor = `#7b0b8d`
      rightBg.style.backgroundColor = `#115e6f`
    }, 200);

    // Hero Section animations
    const heroP = document.querySelector('#hero p')
    const heroH2 = document.querySelector('#hero h2')

    gsap.fromTo(heroP,{opacity:0, x: -200},{opacity:1,delay:.3  ,x:0, duration:1 ,ease: Power1.easeOut})
    gsap.fromTo(heroH2,{opacity:0, x: 150},{opacity:1, x:0, duration:1 ,ease: Power1.easeOut, delay:.05,scrollTrigger:{
      trigger: heroH2,
      start: 'top 80%',
      end: 'bottom 20%'
    }})

    // Services Section animations

    const servicesTl = gsap.timeline({
      scrollTrigger:{
        trigger: document.querySelector('#services ul'),
        start: 'top 50%'
      }
    })

    servicesTl.fromTo(document.querySelectorAll('#services ul li'),{opacity:0,y: 100},{opacity:1, y:0, duration: .8, ease:Power1.easeOut, stagger: .2})

    const homeImgs = document.querySelectorAll('#projects picture img')

    homeImgs.forEach(img => {
      gsap.fromTo(img,{scale:1.2,y:50, opacity:0, x:20},{ease: Power1.easeOut, y:0,  scale: 1, opacity:1, x:0, duration: 1,scrollTrigger:{
        trigger: img,
        start: 'top 80%',
        end: 'bottom 20%',
      }})
    });

  }, []);

  return (
    <>
      <main>
        <section id="hero">
          <div className="container">
            <h2 className="scale-up" >{t('HEROH2')}</h2>
            <div>
            </div>
            <p className="grey__desc not-faded">Nicolas Fullin - {t('HEROP')}</p>
          </div>          
        </section>
        <Services/>
        <FirebaseProjectList/>
      </main>
    </>
  )
}
