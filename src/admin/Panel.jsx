import '../admin/index.css'
import NicoLogo from '../assets/img/logo-blanco.png'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Panel = () => {

  useEffect(() => {
    // Agrega la clase al body cuando el componente se monta
    document.body.classList.add('panel-active');

    // Elimina la clase del body cuando el componente se desmonta
    return () => {
      document.body.classList.remove('panel-active');
    };
  }, []);

  return (
    <div className='panel'>
        <header>
          <div className="container">
            <div className='panel-nav'>
              <div className='brand-box'>
                <img src={NicoLogo} alt="Logo de Nico Fulin" />
                <span className='admin-batch'>Admin Panel</span>
              </div>

              <div>
                <Link to={'/'} className="panel-btn">Ver Sitio Online</Link>
              </div>
              
            </div>
          </div>
        </header>
        
        
    </div>
  )
}

export default Panel