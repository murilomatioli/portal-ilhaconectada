import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import TextEditorComponent from "./textEditorComponent";
import PublishProjectComponent from "./publishProject";
import { ImContrast, ImSearch } from "react-icons/im";
import { IoCloseOutline } from "react-icons/io5";

function HeaderComponent() {
  const [mostrarOverlay, setMostrarOverlay] = useState(false);
  const [mostrarTextEditor, setMostrarTextEditor] = useState(true);
  const [altoContraste, setAltoContraste] = useState(false);

  const handlePublicar = () => {
    setMostrarOverlay(true);
  };

  const handleOverlayClick = (event) => {
    // Impede que os cliques no overlay cheguem aos elementos subjacentes
    event.stopPropagation();
  };

  const toggleAltoContraste = () => {
    setAltoContraste(!altoContraste);
  };
  const alternarComponente = () => {
    setMostrarTextEditor(!mostrarTextEditor); // Alterna entre exibir o editor de texto e o formulário
  };

  return (
    <>
      <div className={altoContraste ? `${styles.headerBody} ${styles.altoContraste}` : styles.headerBody}>
        <ul className={styles.headerUl}>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/fotos">Fotos</Link></li>
          <li><Link to="/article">Projetos e artigos</Link></li>
        </ul>
        {/*<div className={styles.postContainer}>
          <input
            type="button"
            value="+ Publicar"
            title="Publicar"
            className={styles.postBtn}
            onClick={handlePublicar}
          />
        </div>
        {mostrarOverlay && (
          <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
              <button onClick={() => setMostrarOverlay(false)} title="Fechar janela" className={styles.closeModal}><IoCloseOutline /></button>
              {mostrarTextEditor ? <TextEditorComponent /> : <PublishProjectComponent/>}
              <button onClick={alternarComponente} className={styles.alternarBtn}>Alternar</button>
            </div>
          </div>
        )}
        */}
        
        <div className={styles.searchContainer}>
          <input type="text" className={styles.search} placeholder="pesquisar..." />

          <button className={styles.searchButton}><ImSearch /></button>
        </div>
        {/* <div className={styles.acessibilidadeContainer}>
          <p>Alto contraste</p>
          <button className={styles.acessibilidadeBtn} title="Alto contaste" onClick={toggleAltoContraste}>
            <ImContrast />
          </button>
        </div>
        */}
      </div>
      <img src="/ilhaconectada.png" alt="Ilha Conectada" title="Ilha Conectada" className={styles.ilhaLogo} />
    </>
  );
}

export default HeaderComponent;
