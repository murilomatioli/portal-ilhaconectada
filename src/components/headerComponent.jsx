import React from "react"
import styles from "./header.module.css"
function HeaderComponent (){
    return(
        <>
            
            <div className={styles.headerBody}>
                <ul className={styles.headerUl}>
                    <li>Página Inicial</li>
                    <li>Sobre</li>
                    <li>Fotos</li>
                </ul>
                <div className={styles.searchContainer}>
                    <input type="text" className={styles.search} placeholder="pesquisar..."></input>

                    <input type="button" className={styles.searchButton}></input>
                </div>
            </div>
            <img src="/ilhaconectada.png" alt="Ilha Conectada" className={styles.ilhaLogo}/>
        </>
    )
}

export default HeaderComponent