import React, { useState } from "react";
import styles from "./footer.module.css";
import { MdOutlineEmail, MdPhone, MdLocationOn, MdChat  } from "react-icons/md";
function FooterComponent() {
    return(
        <>
        <div className={styles.footerBody}>
            <div className={styles.footerWrapper}>
            <div className={styles.contact}>
                <h2>Contato</h2>
                <ul>
                    <li><MdPhone />Telefone: 18 23456-7890</li>
                    <li><MdOutlineEmail />Email: informatica@ilhasolteira.br</li>
                    <li><MdLocationOn />Endereço: Praça Paiáguas, Centro</li>
                    <li><MdChat />CEP: 15385-000</li>
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

