import React from "react";
import styles from "./articleBase.module.css"

function ArticleBase ({ title, content, author, description }){
    return(
        <>    
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>By {author}</p>
            <p>{description}</p>
        </div>

        </>
    )
}

export default ArticleBase;