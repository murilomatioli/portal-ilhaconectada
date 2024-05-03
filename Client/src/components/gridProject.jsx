import React, { useEffect, useState } from "react";
import styles from "./gridProject.module.css";
import { Link } from "react-router-dom"; // Importe o componente Link

function GridComponent() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetchProjetos();
    }, []);

    const limitarDescricao = (descricao, limite) => {
        if (descricao && descricao.length > limite) {
            return descricao.slice(0, limite) + '...';
        } else {
            return descricao;
        }
    };

    const fetchProjetos = async () => {
        try {
            const response = await fetch("http://localhost:4000/projetos");
            const data = await response.json();
            console.log("Projetos buscados")
            setProjetos(data);
        } catch (error) {
            console.error("Erro ao obter os projetos:", error);
        }
    }; 
    return(
        <>
        <div className={styles.contentContainer}>
            <div className={styles.gridContainer}>
                {
                    projetos.slice(0, 4).map(projeto => { 
                        return (
                            <Link to={`/article/${projeto._id}`} className={styles.gridItem} key={projeto.id}  style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div>
                                    <h2 className={styles.ArticleTitle}>{projeto.title}</h2>
                                    <div className={styles.descriptionContainer}>
                                        <p className={styles.gridDescription}>{limitarDescricao(projeto.description, 140)}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        </>
    )

}

export default GridComponent;
