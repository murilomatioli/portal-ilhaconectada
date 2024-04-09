import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styles from "./about.module.css"
import HeaderComponent from "../components/headerComponent";
function AboutPage (){
    return(
        <>
        <HeaderComponent></HeaderComponent>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>&gt; Sobre</h1>
            </div>
        </>
    )
}

export default AboutPage;