import styles from "./ThemeButton.module.css";

export const ThemeButton = ({ setTheme }) => {
  const changeTheme = () => {
    setTheme("Light");
  };

  return (
    <button className={styles.themeBtn} type="button" title="Theme change button" onClick={changeTheme}>
      <img src="./img/icon-sun.svg" alt="Sun" />
    </button>
  );
};
