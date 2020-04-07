import React from "react";
import * as styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <span>Bolu Olubajo</span>
      </a>
      <nav>
        <ul className={styles.nav_links}>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
