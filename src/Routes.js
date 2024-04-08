import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/sobre' element={<AboutPage/>}></Route>        
      </Routes>
    </Router>
  );
}

export default AppRoutes;