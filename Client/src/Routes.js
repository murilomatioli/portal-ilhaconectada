import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import FotosPage from './pages/Fotos.jsx';
import ArticleBase from './artigos/article-base.jsx';

function AppRoutes() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/sobre' element={<AboutPage/>}></Route>
        <Route path='/fotos' element={<FotosPage></FotosPage>}></Route>
        <Route path="/article/:id" element={<ArticleBase></ArticleBase>} />
      </Routes>
  );
}

export default AppRoutes;