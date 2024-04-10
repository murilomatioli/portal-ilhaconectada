import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import TextEditorComponent from "./textEditorComponent";

function HeaderComponent() {
  const [mostrarOverlay, setMostrarOverlay] = useState(false);

  const handlePublicar = () => {
    setMostrarOverlay(true);
  };

  const handleOverlayClick = (event) => {
    // Impede que os cliques no overlay cheguem aos elementos subjacentes
    event.stopPropagation();
  };

  return (
    <>
      <div className={styles.headerBody}>
        <ul className={styles.headerUl}>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/fotos">Fotos</Link></li>
        </ul>
        <div className={styles.postContainer}>
          <input
            type="button"
            value="+ Publicar"
            className={styles.postBtn}
            onClick={handlePublicar}
          />
        </div>
        {mostrarOverlay && (
          <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
              <button onClick={() => setMostrarOverlay(false)} className={styles.closeModal}>Fechar</button>
              <TextEditorComponent></TextEditorComponent>
            </div>
          </div>
        )}
        <div className={styles.searchContainer}>
          <input type="text" className={styles.search} placeholder="pesquisar..." />
          <input type="button" className={styles.searchButton} />
        </div>
      </div>
      <img src="/ilhaconectada.png" alt="Ilha Conectada" className={styles.ilhaLogo} />
    </>
  );
}

export default HeaderComponent;

