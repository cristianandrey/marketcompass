import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import imgCompass from "../../assets/img/imgCompass.png";
import nameCompass from "../../assets/img/name.png";

function LoginForm() {
  const [usuario, setUsuario] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "usuario") {
      setUsuario(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = () => {
    console.log(usuario, password);
  };

  return (
    <div className={styles.contenedor}>
      {/* primera columna */}
      <div>
        <div className={styles.contenido}>
          <div className={styles.title}>
            <h1>Bienvenido,</h1>
            <span>
              Para seguir navegando de forma segura, inicia sesión en la red.
            </span>
          </div>
          <h1>Login</h1>
          <div className={styles.form}>
            <div className={styles.form_card}>
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={(e) => handleInputChange(e)}
                className={styles.form__input}
                placeholder="Usuario"
              />
              <i className="fa-regular fa-user"></i>
            </div>

            <div className={styles.form_card}>
              <input
                className={styles.form__input}
                value={password}
                onChange={(e) => handleInputChange(e)}
                type="password"
                id="password"
                placeholder="Password"
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            <div>
                <p id="check"></p>
            </div>
            <div className={styles.btn_login}>
              <button
                onClick={() => handleSubmit()}
                type="submit"
                className={styles.btn}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* segunda columna */}
      <div>
        <div>
          <img className={styles.nameCompass} src={nameCompass} />
          <img className={styles.logo_Compass} src={imgCompass} />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
