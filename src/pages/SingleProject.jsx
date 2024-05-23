
import ImgMarquee from '../components/ImgMarquee'
import { useParams } from 'react-router-dom';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Power1 } from "gsap";
import { useRef, useEffect, useState } from 'react';
import { db } from "../../firebase";
import { getDocs, collection,where, query, doc } from "firebase/firestore";
import { useLanguage } from '../context/LanguageContext';


export default function SingleProject() {

  const {slug} = useParams()
  const [project, setProject] = useState(null);

  const {language} = useLanguage()

  console.log(language)
 

  useEffect(() => {
    const buscarProyectoPorSlug = async (slug) => {
      try {
        const q = query(collection(db, "proyectos"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        setProject(querySnapshot.docs[0].data())
      } catch (error) {
        console.error('Error al buscar el proyecto por slug:', error);
      }
    };

    buscarProyectoPorSlug(slug);
  }, []);

  const verticalImgsRef = useRef()
  gsap.registerPlugin(ScrollTrigger)
  
  

  // if (!project) {
  //   return <NotFound /> // Muestra un mensaje si el proyecto no se encuentra
  // } 

  useEffect(() => {

    if(project){

      console.log(project) 
      const leftBg = document.querySelector('.background .red-blur')
      const rightBg = document.querySelector('.background .blue-blur')

      console.log(leftBg, rightBg)

      setTimeout(() => {
        leftBg.style.backgroundColor = `${project.leftBlurBackground}`
        rightBg.style.backgroundColor = `${project.rightBlurBackground}`
      }, 200);
      
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
      const verticalImgs = document.querySelector('#vertical-images');
      // Observar el elemento
      verticalImgs ? observer.observe(verticalImgs) : null

      }

  }, [project]);

  return (
    <main>
      {project ? (
        <>
          <section id="hero" className="single-project container">
            <div className="project__content not-faded" data-scroll-class="faded">
                {language === "en" ? (
                    <p className="grey__desc not-faded">{Array.isArray(project.categoryEN) ? project.categoryEN.join(" | ") : project.categoryEN}</p>
                ) : (
                    <p className="grey__desc not-faded">{Array.isArray(project.category) ? project.category.join(" | ") : project.category}</p>
                )}
                <h2>
                    {project.name}
                </h2>
            </div>
            <div className="sobremi-content-right">
                {language === 'en' ? (
                    <p>{project.projectHeroTextEN}</p>
                ) : (
                    <p>{project.projectHeroText}</p>
                )}
            </div>               
        </section>
          <section id='project-showcase'>
                    <h2>Te muestro un poco mas acerca de este proyecto</h2>

                      {project.category.length === 1 && project.category[0] === 'Web'? (
                            <div className='web-images'>
                              {project.webImages.map((image, i) => {
                                
                                return <picture key={i}>
                                          <div className='overflow-box'>
                                            <img src={image} alt="Web project image" />
                                          </div>                                          
                                        </picture>
                              })}
                            </div>                            
                        ) : (
                          <ImgMarquee images={project.horizontalImgArray} />     
                    )}   

                    <div className="project-overview">
                      <h3>Mas detalles del proyecto</h3>

                      {language === 'en' ? (
                          <p>{project.projectSecondTextEN}</p>
                      ) : (
                          <p>{project.projectSecondText}</p>
                      )}

                    </div>
                    <ul id="vertical-images" ref={verticalImgsRef}>
                      {
                        project.verticalImgArray.length > 1 ? (
                          project.verticalImgArray.map((img, i) => (
                            <li key={i}>
                              <picture>
                                <img src={img} alt={`Imagen descriptiva del proyecto ${project.name}`} />
                              </picture>
                            </li>
                          ))
                        ) : (
                          <></>
                        )
                      }
                    </ul>
          </section> 
        </>
                       
        ) : (
          <></>
        )
      }
      
    </main>
    
  )
}
