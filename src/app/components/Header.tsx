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
      <div className={styles.LogoBtn}>
        <Link href="/" className={styles.headerLogo}>
          <h2>DIFRAS NEWS</h2>
        </Link>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <button className={menuOpen ? styles.btnOpened : styles.btnOpen}>
            <DehazeIcon />
          </button>
          <button className={menuOpen ? styles.btnClose : styles.btnClosed}>
            <CloseIcon />
          </button>
        </div>
      </div>
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
