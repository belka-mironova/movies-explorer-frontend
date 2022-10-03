import React from "react";
import { Section } from "../../General";
import { ToggleSwitch } from "../../General/ToggleSwitch/ToggleSwitch";
import styles from "./searchForm.module.scss";

export const SearchForm = () => {
  return (
    <Section className={styles.search}>
      <form className={styles.search__form}>
        <input
          type="search"
          name="movie"
          placeholder="Фильм"
          className={styles.search__input}
          required
        />
        <button className={styles.search__button} type="button"></button>
      </form>

      <div className={styles.search__filter}>
        <ToggleSwitch />

        <span className={styles.search__condition}>Короткометражки</span>
      </div>
    </Section>
  );
};
