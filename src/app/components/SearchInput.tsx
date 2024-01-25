"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchInput.module.css";

const SearchInput = () => {
  const [keyword, setKeyword] = useState<string>("");
  const router = useRouter();

  const searchKeyword = (e: FormEvent) => {
    e.preventDefault();
    if (!keyword) {
      router.push("/");
    } else {
      router.push(`/search?q=${keyword}`);
    }
  };

  return (
    <form onSubmit={searchKeyword}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchInput}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchInput;
