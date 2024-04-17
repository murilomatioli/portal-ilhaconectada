import React from "react";
import styles from "./about.module.css"
function AboutPage (){
    return(
        <>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>&gt; Sobre</h1>
                <h2 className={styles.subtitle}>&gt; Missão e objetivos</h2>
                <h2 className={styles.subtitle}>&gt; FAQ</h2>
                <h2 className={styles.subtitle}>&gt; Informações técnicas</h2>
            </div>
        </>
    )
}

export default AboutPage;