import { CategoryNavigation } from "../CategoryNavigation/CategoryNavigation";
import { ClearButton } from "../ClearButton/ClearButton";
import { TodoItemsCounter } from "../TodoItemsCounter/TodoItemsCounter";
import styles from "./MainFooter.module.css";

export const MainFooter = ({ categories }) => {
  return (
    <footer className={styles.main__footer}>
      <TodoItemsCounter />
      <CategoryNavigation categories={categories} />
      <ClearButton />
    </footer>
  );
};
