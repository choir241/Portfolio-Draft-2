"use client";
import React from "react";
import profileImg from "../images/profile.jpg";
import styles from "../assets/css/main.module.css";

export default function Header() {
  const date = new Date();

  return (
    <header
      id="header"
      className={`${styles.flex} ${styles["justify-between"]} ${styles["align-center"]}`}
    >
      <ul className={styles.icons}>
        <li>
          <h1>Richard Choi</h1>
        </li>
        <li>
          <p>NJ Frontend Software Engineer</p>
        </li>
        <li id="copyright">
          <small>
            Copyright &copy; {date.getFullYear()}. All rights are reserved
          </small>
        </li>
      </ul>

      <section
        className={`${styles.callToAction} ${styles.flex} ${styles["flex-col"]} ${styles["justify-between"]}`}
      >
        <a
          target="_blank"
          href="https://github.com/choir27"
          className={styles.button}
        >
          View My GitHub<small className="fa-brands fa-github"></small>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/richard-choir/"
          className={styles.button}
        >
          View My LinkedIn<small className="fa-brands fa-linkedin"></small>
        </a>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing"
          className={styles.button}
        >
          View My Resume<small className="fa-solid fa-file-lines"></small>
        </a>
      </section>

      <div className={styles.imageContainer}>
        <img
          src={profileImg.src}
          alt="professional profile picture of myself"
        />
      </div>
    </header>
  );
}
