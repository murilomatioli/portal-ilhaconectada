import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./articleBase.module.css";
import { useParams } from "react-router-dom";

function ArticleBase() {
  const [articleData, setArticleData] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    //endpoint
    const apiUrl = `http://localhost:4000/projetos/${id}`;

    axios.get(apiUrl)
      .then(response => {
        setArticleData(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados do artigo:", error);
      });
  }, [id]); 

  return (
    <div className={styles.articleContainer}>
      {articleData ? (
        <>
          <h1 className={styles.articleTitle}>{articleData.title}</h1>
          <p className={styles.articleDescription}>{articleData.description}</p>
          <p className={styles.articleAuthor}>Por: {articleData.author}</p>
          <p dangerouslySetInnerHTML={{__html:articleData.content}} className={styles.articleContent}/>
    
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ArticleBase;