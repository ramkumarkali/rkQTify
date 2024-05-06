import React, { useState } from "react";
import styles from "./search.module.css";
import { ReactComponent as SearchIcon } from "../../assest/Search icon.svg";

function Search({ onSubmit, placeholder }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.search}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
