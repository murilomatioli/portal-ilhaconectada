import React from "react"
import styles from "../components/textEditor.module.css"
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function TextEditorComponent (){
    return(
            <>
            <form>
            <h1 className={styles.title}>&gt; Publicar novo artigo</h1>
            <textarea className={styles.textArea} placeholder="Escreva suas ideias..."></textarea>
            <button type="submit" className={styles.publicarBtn}>Publicar</button>
            </form>
            </>
    )
}

export default TextEditorComponent