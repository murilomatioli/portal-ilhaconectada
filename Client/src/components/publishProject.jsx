import React, { useState } from "react";
import styles from "../components/publishProject.module.css";

function PublishProjectComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const collectData = async (e) => {

    alert("Projeto publicado!")
    e.preventDefault();
    let result = await fetch('http://localhost:4000/projetos', {
      method: 'post',
      body: JSON.stringify({ title, description}),
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
        <input type="text" className={styles.titleInput} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do projeto"></input>
        <textarea className={styles.descriptionInput} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição do projeto"></textarea>
        <button type="submit" title="Publicar projeto" className={styles.publicarBtn}>Publicar projeto</button>
      </form>
    
    </>
  );
}

export default PublishProjectComponent;
