import React from "react";
import styles from "./button.module.css";

function Button() {
  return (
    <div className={styles.divbutton}>
      <button className={styles.button}>Give Feedback</button>
    </div>
  );
}

export default Button;
