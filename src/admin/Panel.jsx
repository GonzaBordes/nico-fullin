import '../admin/index.css'
import PanelHeader from './components/PanelHeader'
import { Outlet } from 'react-router-dom'

const Panel = () => {

  return (
    <div className='panel'>
        <PanelHeader />
        <Outlet />
    </div>
  )
}

export default Panel