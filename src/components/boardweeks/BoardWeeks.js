import React from "react";
import styles from "./BoardWeeks.module.css";

function BoardWeeks() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.row}>

        <div className={styles.column}>
          <div className={styles.card1}></div>
        </div>
        <div className={styles.column}>
          <div className={styles.card2}>Lunes</div>
        </div>
        <div className={styles.column}>
          <div className={styles.card3}>Martes</div>
        </div>
        <div className={styles.column}>
          <div className={styles.card4}>Miercoles</div>
        </div>
        <div className={styles.column}>
          <div className={styles.card5}>Jueves</div>
        </div>
        <div className={styles.column}>
          <div className={styles.card6}>Viernes</div>
        </div>
        <div className={styles.column}>
          <div className={styles.card7}>Sabado</div>
        </div>
        <div className={styles.column}>
          <div className={styles.card8}>Domingo</div>
        </div>
      </div>
    </div>
  );
}

export default BoardWeeks;
