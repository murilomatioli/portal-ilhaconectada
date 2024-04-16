import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import FotosPage from './pages/Fotos.jsx';

function AppRoutes() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/sobre' element={<AboutPage/>}></Route>
        <Route path='/fotos' element={<FotosPage></FotosPage>}></Route> 
      </Routes>
  );
}

export default AppRoutes;