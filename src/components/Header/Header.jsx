import ThemeButton from "../ThemeButton/ThemeButton";
import styles from "./Header.module.css";

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todo</h1>
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;
