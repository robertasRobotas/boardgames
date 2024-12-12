import React from "react";
import styles from "./styles.module.css";

type HeaderProps = {
  logoTitle: string;
};

const Header = ({ logoTitle }: HeaderProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>{logoTitle}</div>

      <nav>
        <ul>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Pricing">Pricing</a>
          </li>
          <li>
            <a href="Contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
