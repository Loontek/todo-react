import styles from "./ThemeButton.module.css";

const ThemeButton = ({ theme, toggleTheme }) => {
  return (
    <button className={styles.themeBtn} type="button" title="Theme toggle button" onClick={toggleTheme}>
      {theme === "dark" ? <img src="./img/icon-sun.svg" alt="Sun" /> : <img src="./img/icon-moon.svg" alt="Moon" />}
    </button>
  );
};

export default ThemeButton;
