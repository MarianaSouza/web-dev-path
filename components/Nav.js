import Link from "next/link";
import { useState } from "react";
import styles from "../styles/ResponsiveNavbar.module.css";

export default function Nav() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((active) => !active);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.navContainer} ${styles.row}`}>
        <div className={styles.align}>
          <Link href="/">
            <img
              className={`${styles.img} ${styles.logo}`}
              src="/images/web-dev-path-logo-small.png"
              alt="Logo"
            />
          </Link>
          <button
            className={styles.navToggle}
            aria-label="open navigation"
            onClick={toggleActive}
          >
            <span className={styles.hamburger} />
          </button>
        </div>
        <nav className={`${active ? styles.navVisible : styles.nav}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/about-us">
                <a className={styles.navLink}>About Us</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="https://github.com/MarianaSouza/web-dev-path">
                <a className={styles.navLink}>Github Repository</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog/index">
                <a className={styles.navLink}>Blog</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact-us">
                <a className={styles.navLink}>Contact Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
