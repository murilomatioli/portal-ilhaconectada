import React from "react";
import styles from "./home.module.css"
import HeaderComponent from "../components/headerComponent";
import { AiOutlineMenu } from "react-icons/ai";
import FooterComponent from "../components/footerComponent";

function HomePage (){
    return(
        <>    
        <div className={styles.contentContainer}>

            <h1 className={styles.title}>&gt; Início</h1>
            <p></p>
            <div className={styles.destaques} >
                <h2 className={styles.destaqueHead}><AiOutlineMenu/>Destaques</h2>
            <ul>
                <li>In id ex condimentum, aliquam est ut, eros</li>
                <li>Proin commodo ipsum sit amet dui effi, posuere.</li>
                <li>Donec sit amet neque cinia in sit amet lectus.</li>
                <li>Morbi tristique eu leo sollicitudin maximus.</li>
                <li>Cras elementum ibh molestie tempor volutpat.</li>
                <li>Aenean na vel est  vehicula vitae iaculis mauris.</li>
            </ul>
            </div>
        </div>

        </>
    )
}

export default HomePage;