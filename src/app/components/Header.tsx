"use client";

import Link from "next/link";
import SearchInput from "./SearchInput";
import Navbar from "./Navbar";
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.headerContainer}>
      <Link href="/" className={styles.LogoBtn}>
        <div className={styles.headerLogo}>
          <h2>DIFRAS NEWS</h2>
        </div>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <button className={menuOpen ? styles.btnOpened : styles.btnOpen}>
            <DehazeIcon />
          </button>
          <button className={menuOpen ? styles.btnClose : styles.btnClosed}>
            <CloseIcon />
          </button>
        </div>
      </Link>
      <div className={menuOpen ? styles.navContainerRes : styles.navContainer}>
        <Navbar />
      </div>
      <div
        className={menuOpen ? styles.inputContainerRes : styles.inputContainer}
      >
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
