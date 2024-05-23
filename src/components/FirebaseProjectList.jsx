import React, { useState, useEffect,usela } from "react";
import { db } from "../../firebase";
import { getDocs, collection, doc } from "firebase/firestore";
import HeroImgs from "./HeroImgs";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { useLanguage } from '../context/LanguageContext';

const FirebaseProjectList = () => {
  const [proyectos, setProyectos] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState(null);    

  const {t} = useTranslation()
  const { language } = useLanguage();

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => { 
    const fetchProyectos = async () => {
      try {
          const querySnapshot = await getDocs(collection(db, "proyectos"));
          const proyectosData = [];
          querySnapshot.forEach((doc) => {
            proyectosData.push({ id: doc.id, ...doc.data()});
          });

          setProyectos(proyectosData);
          setFilteredProjects(proyectosData);          
      } catch (error) {
        console.error('Error al obtener los proyectos:', error);
      }
    }

    const projectsH2 = document.getElementById('projects').querySelector('h2');
    const filterButtonsAll = document.querySelectorAll('.filters button');

    const btnTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.filters',
        start: 'top 80%',
      },
    });

    btnTl.from(projectsH2, {
      duration: 1.2,
      opacity: 0,
      xPercent: 20,
    })
    .from(filterButtonsAll, {
      duration: 1.2,
      opacity: 0,
      x: -20,
      stagger: 0.13,
    }, '-=1');

    fetchProyectos();

    
  }, []);

  useEffect(() => {
    if (proyectos.length > 0) {
        const projectsContainers = document.querySelectorAll('#projects li');
       

        // Crea una línea de tiempo global para todas las animaciones de proyectos
        let projectsTimeline = gsap.timeline();

        // Itera sobre los proyectos
        projectsContainers.forEach(project => {
            let content = project.querySelector('.project__content');
            let images = project.querySelectorAll('.project__images picture');

            // Agrega las animaciones al timeline global
            projectsTimeline.from(content, { opacity: 0, duration: 1 });
            projectsTimeline.from(images, { scale: 1.5, y: -40, x: 40, opacity: 0, duration: 1, stagger: .1 }, "-=1");
        });

        // Define el scrollTrigger para el timeline global
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            animation: projectsTimeline,
            trigger: "#projects ul", // El disparador es el contenedor de todos los proyectos
            
        });

        // Devuelve una función de limpieza para eliminar las animaciones al desmontar el componente
        return () => {
            projectsTimeline.kill();
        };
    }

  }, [proyectos]);

  useEffect(() => {
      if (proyectos.length > 0) {
        const projectsList= document.querySelectorAll('#projects ul');
      

        gsap.from(projectsList,{opacity:0, y: 20,duration: .6})
    }
  }, [filter]);


  const handleFilterClick = (event) => {
    const selectedButton = event.target; // Obtenemos el botón clickeado
    const selectedFilter = selectedButton.dataset.filter; // Obtenemos el valor del atributo data-filter del botón clickeado
  
    setFilter(selectedFilter);
    if (selectedFilter !== "Mostrar Todos") {
      const filteredProjects = proyectos.filter(project => 
        project.category && project.category.includes(selectedFilter)
      );
      setFilteredProjects(filteredProjects);
    } else {
      setFilteredProjects(proyectos); // Mostrar todos los proyectos nuevamente
    }
  
    // Agregar la clase "active" al botón seleccionado y quitarla de los demás
    const buttonsAll = document.querySelectorAll('.filters button');
    buttonsAll.forEach(btn => {
      btn.classList.remove('active');
    });
    selectedButton.classList.add('active');
  };

  return (
    <>
      <section data-scroll id="projects">
        <h2 className="container">{t('PROJECTS HEADING')}</h2>
        <div className="filters container">
          <button className="active" data-filter="Mostrar Todos" onClick={handleFilterClick}>{t('SHOW ALL')}</button>
          <button data-filter="Identidad de Marca" onClick={handleFilterClick}>{t('BRAND IDENTITY')}</button>
          <button data-filter="Redes Sociales" onClick={handleFilterClick}>{t('SOCIAL NETWORKS')}</button>
          <button data-filter="Web" onClick={handleFilterClick}>Web</button>
        </div>
        <div className="container">
          <ul className="project-list">
          {filteredProjects.map((project, i) => {
            return (
              <li key={project.id} data-index={i} className={project.slug}>
                <div data-scroll className="project__content">
                  <span>
                    <img
                      className="project__logo"
                      src={project.logo}
                      alt={`Logo del proyecto ${project.name}`}
                    />
                  </span>
                  <h3>{project.name}</h3>
                  {language === 'en' ? (
                      <p>{project.homeTextEN}</p>
                    ) : (
                      <p>{project.homeText}</p>
                    )
                  }
                  
                </div>
                <div data-scroll className="project__images">
                  <HeroImgs
                    heroImgs={project.heroImgs}
                    slug={project.slug}
                    name={project.name}
                  />
                </div>
              </li>
            );
          })}
          </ul>
        </div>
      </section>
      
    </>
  )
}

export default FirebaseProjectList;
