import React from "react";
import styles from "./about.module.css"
import HeaderComponent from "../components/headerComponent";
function FotosPage (){
    return(
        <>
        <HeaderComponent></HeaderComponent>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>&gt; Fotos</h1>
                
            </div>
        </>
    )
}

export default FotosPage;