
import Projects from '../data/Projects'
import HeroImgs from './HeroImgs'


export default function ProjectsList() {
  return (
    <section data-scroll id="projects">
            <h2>Proyectos seleccionados</h2>
            <ul>
              {
                Projects.map(project =>{
                  return (
                    <li key={project.slug} className={project.slug}>
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
