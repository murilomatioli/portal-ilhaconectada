import React from "react";
import styles from "./about.module.css"
function AboutPage (){
    return(
        <>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>&gt; Sobre</h1>
                <p className={styles.paragrafo}>O projeto Ilha Conectada é uma iniciativa da Prefeitura da Estância Turística de Ilha Solteira que trás a oportunidade de estagiar na área de TI,
                     participando da criação e manutenção de aplicações que envolvem tanto Front-end, quanto Back-end. <br/>É uma excelente oportunidade de aprender e 
                     se aprimorar na área desenvolvendo suas habilidades e conhecimentos além de botar e prática o trabalho em equipe junto a outros estagiários, é possível saber mais
                     entrando em contato com o setor de informática em <em className={styles.emphasis}>informatica@ilhasolteira.br</em> ou visitando pessoalmente na Praça dos Paiaguás, no segundo andar
                      do edifício da Fundação Cultural.</p>
                <h2 className={styles.subtitle}>&gt; Missão e objetivos</h2>
                <h2 className={styles.subtitle}>&gt; FAQ</h2>
                <h2 className={styles.subtitle}>&gt; Informações técnicas</h2>
            </div>
        </>
    )
}

export default AboutPage;