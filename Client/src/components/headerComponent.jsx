import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";


function HeaderComponent() {

  return (
    <>
      <div className={styles.headerBody}>
        <ul className={styles.headerUl}>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/fotos">Fotos</Link></li>
          <li><Link to="/article">Projetos e artigos</Link></li>
        </ul>
        <div className={styles.searchContainer}>
          <input type="text" className={styles.search} placeholder="pesquisar..." />

          <button className={styles.searchButton}><ImSearch /></button>
        </div>
      </div>
      <img src="/ilhaconectada.png" alt="Ilha Conectada" title="Ilha Conectada" className={styles.ilhaLogo} />
    </>
  );
}

export default HeaderComponent;
