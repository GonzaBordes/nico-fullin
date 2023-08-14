import { NavLink } from "react-router-dom"

export default function Header() { 
  return (
    <header>
      <div className="container">
        <h1>Porfolio de Nico Fullin</h1>
        <nav>
          <ul>
            <li>
              <NavLink to={'/'} >Home</NavLink>
            </li>
            <li>
              <NavLink to={'/sobre-mi'}>Sobre mi</NavLink>
            </li>
            <li>
              <NavLink to={'/contacto'}>Contacto</NavLink>
            </li>         
          </ul>
        </nav>
      </div>        
    </header>
  )
}
