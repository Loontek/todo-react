import { ThemeButton } from "../ThemeButton/ThemeButton";
import styles from "./Header.module.css";

export const Header = ({ theme, changeTheme }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todo</h1>
      <ThemeButton theme={theme} changeTheme={changeTheme} />
    </header>
  );
};
