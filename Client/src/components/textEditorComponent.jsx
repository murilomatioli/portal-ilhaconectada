import React, { useState } from "react";
import styles from "../components/textEditor.module.css";
import { useEffect } from "react";
import axios from 'axios';
function TextEditorComponent() {
  const [content, setContent] = useState("");
  return (
    <>
      <form>
        <h1 className={styles.title}>&gt; Publicar novo artigo</h1>
        <textarea className={styles.textArea} placeholder="Escreva suas ideias..."></textarea>
        <button type="submit" title="Publicar conteúdo" className={styles.publicarBtn}>Publicar</button>
      </form>
    </>
  );
}

export default TextEditorComponent;
