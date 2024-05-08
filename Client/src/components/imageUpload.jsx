// ImageUploadComponent.js
import React, { useState } from "react";
import { useDropzone } from 'react-dropzone';
import styles from "./imageUpload.module.css";

function ImageUploadComponent({ setImages }) {
    const [images, setLocalImages] = useState([]);

    const onDrop = (acceptedFiles) => {
        setLocalImages(acceptedFiles);
        setImages(acceptedFiles); // Passando as imagens selecionadas para o componente pai
    };

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    return (
        <div className={styles.UploadContainer}>
            <h2 className={styles.cardh2}>Adicionar imagens</h2>
            <div {...getRootProps()} className={styles.dropzone}>
                <input {...getInputProps()} />
                <img src="upload-cloud.png" className={styles.image}></img>
                <p className={styles.uploadText}>Arraste seu arquivo para cá</p>
            </div>
            {images.map((file, index) => (
                <div key={index} className={styles.previewContainer}>
                    <p className={styles.fileName}>Imagem: <em>{file.name}</em></p>
                    <img src={URL.createObjectURL(file)} alt="Imagem" className={styles.filePreview} />
                </div>
            ))}
        </div>
    );
}

export default ImageUploadComponent;
