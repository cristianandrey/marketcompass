import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import svgN from "../../assets/img/name2.svg";
import logout from "../../assets/img/logout.png";

function Header() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 20000);
  }, []);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.navigation}>
      <div className={styles.brand_name}>
        <h4>Weekly Planner</h4>
        <p>Use this planner to organize your daily issues</p>
      </div>
      <div className={styles.fechas}>
        <h1>
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </h1>
        <h2>
          {dateState.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h2>
      </div>
      <div className={styles.clima}>
        <p>Asunción - Paraguay </p>

        <p className={styles.tempe}>
          <i className="fa-solid fa-cloud-sun"></i>22º
        </p>
      </div>

      <div className={styles.logout}>
        <img src={svgN} />
        <button className={styles.btn_logout}>
          <img src={logout} />
          Logout
        </button>
      </div>
      


      {/* <div
        className={
          isNavExpanded
            ? styles["navigation_menu expanded"]
            : styles["navigation_menu"]
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

export default Header;
