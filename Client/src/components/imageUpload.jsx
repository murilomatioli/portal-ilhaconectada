
import React, { useState } from "react";
import styles from "./imageUpload.module.css";

function ImageUploadComponent() {

    return (
        <div className={styles.UploadContainer}>
            <h2 className={styles.cardh2}>Adicionar imagens</h2>
            <div className={styles.dropzone}>
                <input />
                <img src="upload-cloud.png" className={styles.image}></img>
                <p className={styles.uploadText}>Arraste seu arquivo para cá</p>
                
            </div>
            <label for="fileUpload"><input type="file" name="fileUpload"/></label>
        </div>
    );
}

export default ImageUploadComponent;
