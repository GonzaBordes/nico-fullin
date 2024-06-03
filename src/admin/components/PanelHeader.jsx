import NicoLogo from '../../assets/img/logo-blanco.png'
import { Link } from 'react-router-dom'
import ThemeToggle from '../../components/ThemeToggle'

const PanelHeader = () => {
  return (
    <>
      <header>
          <div className="container">
            <div className='panel-nav'>
                <div className='brand-box'>
                <img src={NicoLogo} alt="Logo de Nico Fulin" />
                <span className='admin-batch'>Admin Panel</span>
                </div>
                <div className='nav-content'>
                <ThemeToggle />
                <Link to={'/'} className="panel-btn">Ver Sitio Online</Link>              
                </div>             
            </div>
          </div>
      </header>
      <section id='panel-intro'>
        <div className="container">
            <h2>Bienvenido Nico</h2>
            <Link to={'/admin/new-project'} className='panel-btn'>+ Agregar Proyecto</Link>
        </div>
      </section>
    </>
    
    
  )
}

export default PanelHeader