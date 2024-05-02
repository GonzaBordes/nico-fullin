import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import HeroImgs from "./HeroImgs";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const FirebaseProjectList = () => {
  const [proyectos, setProyectos] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState(null);    

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

    fetchProyectos();
  }, []);



  useEffect(() => {

    if(proyectos.length > 0){

      const projectsContainers = document.querySelectorAll('#projects li')
      const leftBlurDiv = document.querySelector('.background .red-blur')
      const rightBlurDiv = document.querySelector('.background .blue-blur')

      const projectObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const projectIndex = entry.target.getAttribute('data-index');
            if (projectIndex !== null) {
              leftBlurDiv.style.background = proyectos[projectIndex].leftBlurBackground;
              rightBlurDiv.style.background = proyectos[projectIndex].rightBlurBackground;
            }
          }
        });
      },{threshold: .1});

      projectsContainers.forEach(projectContainer => {
        projectObserver.observe(projectContainer)
      });

      projectsContainers.forEach(project => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: project, // El disparador de la animación es el propio proyecto
            start: "top 80%", // La animación comienza cuando el 80% del proyecto está visible
            end: "bottom 20%", // La animación termina cuando el 20% del proyecto está visible
            toggleActions: "play none none none" // Controla cómo se activa y desactiva la animación
          }
        });

        let content = project.querySelector('.project__content')
        let images = project.querySelectorAll('.project__images picture')

        tl.from(content,{opacity: 0, duration: 1})
        tl.from(images,{scale: 1.5, y: -40, x: 40, opacity:0, duration: 1, stagger: .1}, "-=1")
      });
      
    }

    


    



  }, [filteredProjects]);

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
    if (selectedFilter) {
      const filteredProjects = proyectos.filter(project => 
        project.category && project.category.includes(selectedFilter)
      );
      setFilteredProjects(filteredProjects);
    } else {
      setFilteredProjects(proyectos); // Mostrar todos los proyectos nuevamente
    }

   
  };

  return (
    <>
      <section data-scroll id="projects">
        <h2>Proyectos seleccionados</h2>
        <div className="filters">
          <button onClick={() => handleFilterClick("identidad de Marca")}>Identidad de Marca</button>
          <button onClick={() => handleFilterClick("Branding")}>Branding</button>
          <button onClick={() => handleFilterClick("Redes Sociales")}>Redes Sociales</button>
          <button onClick={() => handleFilterClick("Web")}>Web</button>
          <button onClick={() => handleFilterClick(null)}>Mostrar Todos</button>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, i) => {
            return (
              <li key={project.slug} data-index={i} className={project.slug}>
                <div data-scroll className="project__content">
                  <span>
                    <img
                      className="project__logo"
                      src={project.logo}
                      alt={`Logo del proyecto ${project.name}`}
                    />
                  </span>
                  <h3>{project.name}</h3>
                  <p>{project.homeText}</p>
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
      </section>
    </>
  )
}

export default FirebaseProjectList;
