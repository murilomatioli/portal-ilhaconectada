import React, { useEffect, useState } from "react";
import styles from "./gridComponent.module.css";
function GridComponent() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetchProjetos();
    }, []);
    
    const fetchProjetos = async () => {
        try {
            const response = await fetch("http://localhost:4000/projetos");
            const data = await response.json();
            setProjetos(data);
        } catch (error) {
            console.error("Erro ao obter os projetos:", error);
        }
    }; 
    return(
        <>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <h2>Projeto 1</h2>
                <div className={styles.descriptionContainer}>
                    <p className={styles.gridDescription}>Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição </p>
                </div>
            </div>
            <div className={styles.gridItem}>
                <h2>Projeto 2</h2>
                <div className={styles.descriptionContainer}>
                    <p className={styles.gridDescription}>Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição </p>
                </div>
            </div>
            <div className={styles.gridItem}>
                <h2>Projeto 3</h2>
                <div className={styles.descriptionContainer}>
                    <p className={styles.gridDescription}>Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição </p>
                </div>
            </div>
            <div className={styles.gridItem}>
                <h2>Projeto 4</h2>
                <div className={styles.descriptionContainer}>
                    <p className={styles.gridDescription}>Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição </p>
                </div>
            </div>
        </div>
        </>
    )

}

export default GridComponent;

