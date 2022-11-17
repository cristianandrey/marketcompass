import React, { useState } from "react";
import styles from "./Register.module.css";
import imgCompass from "../../assets/img/imgCompass.png";
import nameCompass from "../../assets/img/name.png";

function RegisterForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [Country, setCountry] = useState(null);
  const [City, setCity] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
  };
  return (
    <div className={styles.contenedor}>
      {/* primera columna */}
      <div>
        <div className={styles.contenido}>
          <div className={styles.title}>
            <h1>Bienvenido,</h1>
            <p>Porfavor, registrate a continuacion</p>
          </div>
          
          <div className={styles.form}>
            <div className={styles.form_card}>
              <label className={styles.form__label}>First Name </label>
              <input
                className={styles.form__input}
                value={firstName}
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Your first Name"
              />
            </div>

            <div className={styles.form_card}>
              <label className={styles.form__label}>Last Name </label>
              <input
                type="text"
                id="lastName"
                className={styles.form__input}
                value={lastName}
                onChange={(e) => handleInputChange(e)}
                placeholder="Your Last Name"
              />
            </div>

            <div className={styles.form_card}>
              <label className={styles.form__label}>Birth date </label>
              <input
                className={styles.form__input}
                value={birthDate}
                onChange={(e) => handleInputChange(e)}
                type="date"
                placeholder="MM/DD/YYYY"
              />
            </div>

            <div className={styles.form_card}>
              <label className={styles.form__label}>Country </label>
              <input
                className={styles.form__input}
                value={Country}
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Your Country"
              />
            </div>

            <div className={styles.form_card}>
              <label className={styles.form__label}>City </label>
              <input
                className={styles.form__input}
                value={City}
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Your City"
              />
            </div>

            <div className={styles.form_card}>
              <label className={styles.form__label}>Email </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => handleInputChange(e)}
                className={styles.form__input}
                placeholder="Email"
              />
            </div>

            <div className={styles.form_card}>
              <label className={styles.form__label}>Password </label>
              <input
                className={styles.form__input}
                value={password}
                onChange={(e) => handleInputChange(e)}
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <div className={styles.form_card}>
              <label className={styles.form__label}>Password </label>
              <input
                className={styles.form__input}
                value={confirmPassword}
                onChange={(e) => handleInputChange(e)}
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <div className={styles.btn_register}>
              <button
                onClick={() => handleSubmit()}
                type="submit"
                className={styles.btn}
              >
                Register Now
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

export default RegisterForm;

/*  <div className={styles.form}>
      <div className={styles.form_body}>
        <div className="username">
          <label className={styles.form__label}>
            First Name{" "}
          </label>
          <input
            className={styles.form__input}
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label className={styles.form__label}>
            Last Name{" "}
          </label>
          <input
            type="text"
            id="lastName"
            className={styles.form__input}
            value={lastName}
            onChange={(e) => handleInputChange(e)}
            placeholder="LastName"
          />
        </div>
        <div className={styles.email}>
          <label className={styles.form__label}>
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            className={styles.form__input}
            placeholder="Email"
          />
        </div>
        <div className={styles.password}>
          <label className={styles.form__label}>
            Password{" "}
          </label>
          <input
            className={styles.form__input}
            value={password}
            onChange={(e) => handleInputChange(e)}
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className={styles.confirm_password}>
          <label className={styles.form__label}>
            Confirm Password{" "}
          </label>
          <input
            className={styles.form__input}
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={() => handleSubmit()} type="submit" className="btn">
          Register
        </button>
      </div>
      <div>
        <img src={imgCompass}/>
      </div>
    </div>  */
