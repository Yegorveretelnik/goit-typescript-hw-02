import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("Enter text for search!");
      return;
    }
    onSubmit(value);
    setValue("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
