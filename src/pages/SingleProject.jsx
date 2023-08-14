
import projects from '../data/Projects'
import ImgMarquee from '../components/ImgMarquee'
import { useParams } from 'react-router-dom';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { Power1 } from "gsap";
import { Scroll } from 'react-locomotive-scroll';
import { useRef } from 'react';


export default function SingleProject() {

  const {slug} = useParams()

  const project = projects.find(project => project.slug === slug);  

  console.log(project)

  const verticalImgsRef = useRef()

  gsap.registerPlugin(ScrollTrigger)  

  // if (!project) {
  //   return <NotFound /> // Muestra un mensaje si el proyecto no se encuentra
  // } 

  useEffect(() => {
    const subtitle = document.querySelector('.grey__desc')
    const h2 = document.querySelector('.single-project h2')
    const rightContent = document.querySelector('.sobremi-content-right')

    gsap.fromTo(h2, {x: -200,opacity:0}, {x:0,opacity:1, duration:1, ease: Power1.easeOut})
    gsap.fromTo(subtitle, {x: -200,opacity:0}, {x:0,opacity:1,delay:.1, duration:1, ease: Power1.easeOut})
    gsap.fromTo(rightContent,{scale:1.4, opacity:0,y:50, x:100},{scale:1, y:0, delay:.1, opacity:1, x:0, duration: 1, ease: Power1.easeOut})


    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }
    
    // Opciones del Intersection Observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Porcentaje de intersección necesario para disparar el evento
    };
    
    // Crear una instancia del Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);
    
    // Obtener el elemento a observar
    const verticalImgs = verticalImgsRef.current;
    
    // Observar el elemento
    observer.observe(verticalImgs);
    

  }, []);

  return (
    <main>
      <section id="hero" className="single-project container">
                  <div className="project__content not-faded" data-scroll-class="faded">
                      <p className="grey__desc not-faded">{project.category}</p>
                      <h2>{project.name}</h2>
                  </div>
                  <div className="sobremi-content-right">
                    <p>{project.projectHeroText}</p>
                  </div>               
        </section>
        <section id='project-showcase'>
          <h2>Te muestro un poco mas acerca de este proyecto</h2>
          <ImgMarquee images={project.horizontalImgArray} />            
          <div className="project-overview">
            <h3>Mas detalles del proyecto</h3>
            <p>{project.projectSecondText}</p>
          </div>
          <ul ref={verticalImgsRef}>
            {
              project.verticalImgArray.map((img,i) => {
                return <li key={i}>
                  <picture>
                    <img src={img} alt={`Imagen descriptiva del proyecto ${project.name}`} />
                  </picture>
                </li>
              })
            }
          </ul>
        </section>      
    </main>
    
  )
}
