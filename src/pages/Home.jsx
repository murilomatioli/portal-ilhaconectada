import React from "react";
import styles from "./home.module.css"
import HeaderComponent from "../components/headerComponent";
function HomePage (){
    return(
        <>
        <HeaderComponent></HeaderComponent>       
        <div className={styles.contentContainer}>

            <h1 className={styles.title}>&gt; Início</h1>
        </div>
        
        </>
    )
}

export default HomePage;