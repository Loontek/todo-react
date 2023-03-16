import styles from "./ThemeButton.module.css";

export const ThemeButton = ({ theme, changeTheme }) => {
  return (
    <button className={styles.themeBtn} type="button" title="Theme change button" onClick={changeTheme}>
      {theme === "Dark" ? <img src="./img/icon-sun.svg" alt="Sun" /> : <img src="./img/icon-moon.svg" alt="Moon" />}
    </button>
  );
};
