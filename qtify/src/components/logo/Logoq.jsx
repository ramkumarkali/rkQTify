import React from "react";
import Logoimage from "../../assest/logo.png";
import styles from "./logo.module.css";


export default function Logo(){
    return(
        <div className={styles.logo}>
            <img src={Logoimage} alt="logo" width={67} height={34}/>
        </div>
        
    )
}