"use client";
import { useState } from "react";
import styles from "../css/main.module.css";

export default function Nav() {
  const [menu, setMenu] = useState<boolean>(false);

  function toggleMenu(check: boolean) {
    check ? setMenu(false) : setMenu(true);
  }

  return (
    <div id="nav" className={styles.nav}>
      <button
        id="menu"
        role="navigation menu button"
        className={`${menu ? `fa-solid fa-xmark ${styles.bars}` : `fa-solid fa-bars ${styles.bars}`}`}
        onClick={(e) => toggleMenu(menu)}
      ></button>

      <nav
        className={`${menu ? "menu" : "hidden"}  ${styles["flex-col"]} ${styles["align-start"]}`}
      >
        <ul>
          <li>
            <h2>Menu</h2>
          </li>
          <li>
            <a className={styles.link} href="#header">
              Home
            </a>
          </li>
          <li>
            <a className={styles.link} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className={styles.link} href="#project">
              All Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
