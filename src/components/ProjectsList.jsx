
import { useEffect } from 'react';

import Projects from '../data/Projects'
import HeroImgs from './HeroImgs'


export default function ProjectsList() {

  useEffect(() => {
   

  const projectsContainers = document.querySelectorAll('#projects li')
  const leftBlurDiv = document.querySelector('.background .red-blur')
  const rightBlurDiv = document.querySelector('.background .blue-blur')

  const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const projectIndex = entry.target.getAttribute('data-index');
        if (projectIndex !== null) {
          leftBlurDiv.style.background = Projects[projectIndex].leftBlurBackground;
          rightBlurDiv.style.background = Projects[projectIndex].rightBlurBackground;
        }
      }
    });
  },{threshold: .1});

  console.log(projectsContainers, leftBlurDiv, rightBlurDiv)

  projectsContainers.forEach(projectContainer => {
    projectObserver.observe(projectContainer)
  });

  }, []);

  return (
    <section data-scroll id="projects">
            <h2>Proyectos seleccionados</h2>
            <ul>
              {
                Projects.map((project, i) =>{
                  return (
                    <li key={project.slug} data-index={i} className={project.slug}>
                      <div data-scroll className="project__content">
                          <span>< img className="project__logo" src={project.logo} alt={`Logo del proyecto ${project.name}`} /></span>
                          <h3>{project.name}</h3>
                          <p>{project.homeText}</p>
                      </div>
                      <div data-scroll  className="project__images">
                        <HeroImgs heroImgs={project.heroImgs} slug={project.slug} name={project.name} />
                      </div>                      
              </li>
                  )
                })
              }
            </ul>
        </section>
  )
}
