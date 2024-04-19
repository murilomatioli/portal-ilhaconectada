import React, { useState } from "react";
import styles from "../components/textEditor.module.css";

function TextEditorComponent() {
  const [content, setContent] = useState("");

  const collectData = async (e) => {
    alert("Conteúdo salvo!")
    e.preventDefault();
    let result = await fetch('http://localhost:4000/', {
      method: 'post',
      body: JSON.stringify({content}),
      headers:{
        'Content-Type': 'application/json'
      },
    });
    result = await result.json
    localStorage.setItem("content", JSON.stringify(result));
  }
  return (
    <>
      <form onSubmit={collectData}>
        <h1 className={styles.title}>&gt; Publicar novo artigo</h1>
        <textarea className={styles.textArea} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Escreva suas ideias..."></textarea>
        <button type="submit" title="Publicar conteúdo" className={styles.publicarBtn}>Publicar conteúdo</button>
      </form>
    </>
  );
}

export default TextEditorComponent;
