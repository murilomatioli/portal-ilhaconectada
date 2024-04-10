import React from "react";
import styles from "./home.module.css"
import format from "../formatacao.module.css"
import HeaderComponent from "../components/headerComponent";
function HomePage (){
    return(
        <>
        <HeaderComponent></HeaderComponent>       
        <div className={styles.contentContainer}>

            <h1 className={styles.title}>&gt; Início</h1>
            <img src="https://p0.pikist.com/photos/419/712/clouds-sky-blue-white-summer-day-sunny-day-sunny-sun-sunbeam.jpg" width="450px"></img>
        </div>
        
        </>
    )
}

export default HomePage;