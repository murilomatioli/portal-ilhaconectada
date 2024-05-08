// PublishProjectComponent.js
import React, { useState } from "react";
import styles from "../components/publishProject.module.css";
import ReactQuill from 'react-quill';
import ImageUploadComponent from "./imageUpload";
import 'react-quill/dist/quill.snow.css'

function PublishProjectComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [images, setImages] = useState([]); // Adicionando estado para as imagens

  const collectData = async (e) => {
    e.preventDefault();

    // Criar um array de objetos contendo os dados das imagens selecionadas
    const imageFiles = images.map(image => ({
      data: image.data,
      contentType: image.type
    }));

    // Criar o objeto de dados do projeto com os dados do formulário e as imagens
    const projectData = {
      title,
      author,
      description,
      content,
      images: imageFiles // Adicionando as imagens ao objeto de dados do projeto
    };

    // Enviar o objeto de dados do projeto para o servidor
    try {
      const result = await fetch('http://localhost:4000/projetos', {
        method: 'POST',
        body: JSON.stringify(projectData),
        headers:{
          'Content-Type': 'application/json'
        }
      });

      const data = await result.json();
      localStorage.setItem("content", JSON.stringify(data));
      alert("Projeto publicado!");
    } catch (error) {
      console.error("Erro ao publicar projeto:", error);
    }
  };
  
  return (
    <>
      <form onSubmit={collectData} className={styles.formContainer}>
        <h1 className={styles.title}>&gt; Publicar novo projeto</h1>
        <input type="text" className={styles.titleInput} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do artigo"></input>
        <input type="text" className={styles.authorInput} value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Autor"></input>
        <input type="text" className={styles.titleInput} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição do artigo"></input>

        <div className={styles.textEditorContainer}>
          <ReactQuill
            theme="snow"
            style={{height:'200px' }}
            value={content}
            onChange={(value) => setContent(value)} 
            placeholder="Conteúdo do artigo"
          />
        </div>
        <ImageUploadComponent setImages={setImages} />

        <button type="submit" title="Publicar artigo" className={styles.publicarBtn}>Publicar artigo</button>
      </form>
    </>
  );
}

export default PublishProjectComponent;
