import styles from "./ThemeButton.module.css";

export const ThemeButton = ({ theme, toggleTheme }) => {
  return (
    <button className={styles.themeBtn} type="button" title="Theme toggle button" onClick={toggleTheme}>
      {theme === "Dark" ? <img src="./img/icon-sun.svg" alt="Sun" /> : <img src="./img/icon-moon.svg" alt="Moon" />}
    </button>
  );
};
