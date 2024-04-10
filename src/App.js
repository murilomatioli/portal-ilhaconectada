import React, { useEffect } from 'react';
import './App.css';
import AppRoutes from './Routes.js';
import FooterComponent from './components/footerComponent.jsx';
import HeaderComponent from './components/headerComponent.jsx';
function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <AppRoutes />
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;

