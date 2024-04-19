import React, { useState } from "react";
import styles from "../components/publishProject.module.css";

function PublishProjectComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const collectData = async (e) => {

    alert("Projeto publicado!")
    e.preventDefault();
    let result = await fetch('http://localhost:4000/projetos', {
      method: 'post',
      body: JSON.stringify({ title, author, description, content}),
      headers:{
        'Content-Type': 'application/json'
      },
    });

    result = await result.json
    localStorage.setItem("content", JSON.stringify(result));
  }
  return (
    <>
    
      <form onSubmit={collectData} className={styles.formContainer}>
        <h1 className={styles.title}>&gt; Publicar novo projeto</h1>
        <input type="text" className={styles.titleInput} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do artigo"></input>
        <input type="text" className={styles.authorInput} value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Autor"></input>
        <input type="text" className={styles.titleInput} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição do artigo"></input>
        <textarea className={styles.descriptionInput} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Conteúdo do artigo"></textarea>
        <button type="submit" title="Publicar artigo" className={styles.publicarBtn}>Publicar artigo</button>
      </form>
    
    </>
  );
}

export default PublishProjectComponent;
