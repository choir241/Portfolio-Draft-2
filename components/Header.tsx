"use client";
import React from "react";
import profileImg from "../public/images/profile.png";
import styles from "../css/main.module.css";

export default function Header() {
  const date = new Date();

  interface Link {
    href: string;
    text: string;
    classNames: string;
  }

  const links = [
    {
      href: "https://github.com/choir27",
      text: "View My Github",
      classNames: "fa-brands fa-github",
    },
    {
      href: "https://www.linkedin.com/in/richard-choir/",
      text: "View My LinkedIn",
      classNames: "fa-brands fa-linkedin",
    },
    {
      href: "https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing",
      text: "View My Resume",
      classNames: "fa-solid fa-file-lines",
    },
  ];

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
          <p>React Developer</p>
        </li>
        <li>
          <p>Located in NJ</p>
        </li>
        <li>
          <p>richardchoi54@gmail.com</p>
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
        {links.map((link: Link) => {
          return (
            <a
              target="_blank"
              key={link.href}
              href={link.href}
              className={styles.button}
            >
              {link.text}
              <small className={link.classNames}></small>
            </a>
          );
        })}
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
