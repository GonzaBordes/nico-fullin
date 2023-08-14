import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import './App.css'
import './index.css'


import Home from './pages/Home';
import Footer from './components/Footer';
import Contacto from './pages/Contacto';
import Header from './components/Header';
import SingleProject from './pages/SingleProject';
import SobreMi from './pages/SobreMi';
import { useLocation } from 'react-router-dom';
import useSmoothScroll from './hooks/UseSmoothScroll.jsx'



const App = () => {

  const pathname = useLocation()
  useSmoothScroll()

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);


  return (
          <div className='App'>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/sobre-mi" element={<SobreMi/>} />
              <Route path="/proyectos/:slug" element={<SingleProject/>} />
            </Routes>
            <Footer/>
          </div>           
  );
}

export default App;
