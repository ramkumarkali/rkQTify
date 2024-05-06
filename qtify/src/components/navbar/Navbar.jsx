import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logoq";
import Button from "../button/Button";
import Search from "../search/Search";
import styles from "./navbar.module.css";

function Navbar() {
  const searchData = "";

  return (
    <nav className={styles.navbar}>
        <Logo />
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button/>
    </nav>
  );
}

export default Navbar;
