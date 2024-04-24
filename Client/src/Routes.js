import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import FotosPage from './pages/Fotos.jsx';
import ArticleBase from './artigos/article-base.jsx';
import AdmPage from './pages/Adm.jsx';
import ProjetoseArtigosPage from './pages/Projetos_e_artigos.jsx';

function AppRoutes() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/sobre' element={<AboutPage/>}></Route>
        <Route path='/fotos' element={<FotosPage></FotosPage>}></Route>
        <Route path='/adm' element={<AdmPage></AdmPage>}></Route>
        <Route path="/article/:id" element={<ArticleBase></ArticleBase>} />
        <Route path="/article" element={<ProjetoseArtigosPage/>} />
      </Routes>
  );
}

export default AppRoutes;