import React from "react";
import styles from "./AddSection.module.css";

function AddSection() {
  return (
    <nav className={styles.card}>
      <div className={styles.inputsadd}>
        <input type="text" placeholder="Task or issue" />
        <select name="semanas" id="semanas">
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miercoles">Miercoles</option>
          <option value="jueves">jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sabado">Sabado</option>
          <option value="Domingo">Domingo</option>
        </select>
        <select name="hotas" id="horas">
          <option value="Lunes">01h 32m</option>
        </select>
      </div>

      <div className={styles.buttons}>
        <button className={styles.add_btn}>+ Add to calendar</button>
        <button className={styles.delete_btn}>- Delete All</button>
      </div>
    </nav>
  );
}

export default AddSection;
