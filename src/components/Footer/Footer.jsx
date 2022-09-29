import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <Routes>
      {["movies", "/saved-movies", "/"].map((path) => (
        <Route
          path={path}
          element={
            <div className={styles.footer}>
              <div className={styles.footer__info}>
                Учебный проект Яндекс.Практикум х BeatFilm.
              </div>
              <div className={styles.footer__menu}>
                <div className={styles.footer__year}>© 2022</div>
                <div className={styles.footer__links}>
                  <a className={styles.footer__link} href="#">
                    Яндекс.Практикум
                  </a>
                  <a className={styles.footer__link} href="#">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          }
        />
      ))}
    </Routes>
  );
};
