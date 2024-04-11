import React from "react";
import styles from "./gridComponent.module.css";
function GridComponent() {
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

