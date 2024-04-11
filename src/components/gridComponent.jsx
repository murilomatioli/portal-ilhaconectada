import React from "react";
import styles from "./gridComponent.module.css";
function GridComponent() {
    return(
        <>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <h2>Recurso 1</h2>
            </div>
            <div className={styles.gridItem}>
                <h2>Recurso 2</h2>
            </div>
            <div className={styles.gridItem}>
                <h2>Recurso 3</h2>
            </div>
            <div className={styles.gridItem}>
                <h2>Recurso 4</h2>
            </div>
        </div>
        </>
    )

}

export default GridComponent;

