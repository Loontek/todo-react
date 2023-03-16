import { ThemeButton } from "../ThemeButton/ThemeButton";
import styles from "./Header.module.css";

export const Header = ({ setTheme }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todo</h1>
      <ThemeButton setTheme={setTheme} />
    </header>
  );
};
