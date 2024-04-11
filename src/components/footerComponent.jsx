import React, { useState } from "react";
import styles from "./footer.module.css";
function FooterComponent() {
    return(
        <>
        <div className={styles.footerBody}>
            <div className={styles.footerWrapper}>
            <div className={styles.contact}>
                <h2>Contato</h2>
                <ul>
                    <li>Telefone: 18 23456-7890</li>
                    <li>Email: informatica@ilhasolteira.br</li>
                    <li>Endereço: Praça Paiáguas, Centro</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <h2>Funcionamento</h2>
                <ul>
                    <li>Segunda a sexta - 7:30 às 17:00</li>
                </ul>
                <p></p>
            </div>
            </div>
        </div>
        </>
    )

}

export default FooterComponent;

