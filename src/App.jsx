import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './App.css'
import './index.css'
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../firebase.js'

import Home from './pages/Home';
import Footer from './components/Footer';
import Contacto from './pages/Contacto';
import Header from './components/Header';
import SingleProject from './pages/SingleProject';
import SobreMi from './pages/SobreMi';
import Panel from './admin/Panel.jsx';
import Login from './components/Login.jsx';

import { useLocation } from 'react-router-dom';
import useSmoothScroll from './hooks/UseSmoothScroll.jsx'
import { UserProvider, UserContext } from './context/UserContext';
import WebsiteLayout from './layouts/WebsiteLayout.jsx';




const App = () => {

  const pathname = useLocation()
  useSmoothScroll()

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  return (
    <UserProvider>
      <ThemeProvider>
        <div className='App'>
          <Routes>
            <Route path="/" element={<WebsiteLayout/>}>
              <Route index element={<Home />} />
              <Route path="sobre-mi" element={<SobreMi/>} />
              <Route path="contacto" element={<Contacto/>} />
              <Route path=":slug" element={<SingleProject/>} />
            </Route>
            
            <Route path="/admin" element={<AdminRoute />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>        
      </ThemeProvider>
    </UserProvider>
             
  );
}

const AdminRoute = () => {
  const { usuario, loading } = React.useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>; // Indicador de carga
  }

  return usuario ? <Panel /> : <Login />;
};

export default App;
