import React from "react"
import styles from "./header.module.css"
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function HeaderComponent (){
    return(
        <Router>
            
            <div className={styles.headerBody}>
                <ul className={styles.headerUl}>
                    
                    <li><Link to="/">Página Inicial</Link></li>
                    <li><Link to="/sobre">Página Inicial</Link></li>
                    <li>Fotos</li>
                </ul>
                <div className={styles.searchContainer}>
                    <input type="text" className={styles.search} placeholder="pesquisar..."></input>

                    <input type="button" className={styles.searchButton}></input>
                </div>
            </div>
            <img src="/ilhaconectada.png" alt="Ilha Conectada" className={styles.ilhaLogo}/>
        </Router>
    )
}

export default HeaderComponent