import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./articleBase.module.css";
import { useParams } from "react-router-dom";

function ArticleBase() {
  const [articleData, setArticleData] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    // Defina a URL do endpoint do backend onde você pode buscar os dados do artigo
    const apiUrl = `http://localhost:4000/projetos/${id}`;

    // Solicitação GET para buscar os dados do artigo com base no ID
    axios.get(apiUrl)
      .then(response => {
        // Defina os dados do artigo no estado
        setArticleData(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados do artigo:", error);
      });
  }, [id]); // Execute o efeito sempre que o ID do artigo mudar

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