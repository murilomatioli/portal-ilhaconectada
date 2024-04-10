import React, { useState } from "react";
import styles from "../components/textEditor.module.css";
import { useEffect } from "react";
import axios from 'axios';
function TextEditorComponent() {
  const [articles, setArticles] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:/getArticles')
    .then(articles => setArticles(articles.data))
    .catch(err => console.log('err'))
  })
  return (
    <>
      <form>
        <h1 className={styles.title}>&gt; Publicar novo artigo</h1>
        <textarea className={styles.textArea} placeholder="Escreva suas ideias..."></textarea>
        <button type="submit" className={styles.publicarBtn}>Publicar</button>
        {
          articles.map(article => {
            <p>{article.content}</p>
          })
        }
      </form>
    </>
  );
}

export default TextEditorComponent;
