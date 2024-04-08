import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/headerComponent';
import AppRoutes from './Routes';


function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
