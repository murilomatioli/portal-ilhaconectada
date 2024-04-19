import React from "react";
import styles from "./home.module.css"
import { AiOutlineMenu } from "react-icons/ai";
import GridComponent from "../components/gridComponent";

function HomePage (){
    return(
        <>    
        <div className={styles.contentContainer}>
            
            <h1 className={styles.title}>&gt; Início</h1>
            <div className={styles.mainContent}>
                <div className={styles.mainContentTitleCont}>
                    <h2 className={styles.mainContentTitle}>Imagem principal</h2>
                </div>
                <div className={styles.mainContentDesc}>
                    <p>Descrição | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  velit. Habitant morbi tristique senectus et netus et  pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Viverra tellus in hac habitasse platea dictumst.</p>
                </div>
            </div>


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
            <h2 className={styles.subtitle}>&gt; Mais artigos</h2>
            <div className={styles.recursosWrapper}>
                <h2 className={styles.subtitle}>&gt; Principais projetos</h2>
                <GridComponent></GridComponent>
            </div>
            
        </div>

        </>
    )
}

export default HomePage;