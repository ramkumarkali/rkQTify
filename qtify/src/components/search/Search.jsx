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
    <form onSubmit={handleSubmit}>
      <div className={styles.searchbar}>
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={styles.searchbutton} type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}

export default Search;
