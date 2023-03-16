import { CategoryNavigation } from "../CategoryNavigation/CategoryNavigation";
import { ClearButton } from "../ClearButton/ClearButton";
import { TodoItemsCounter } from "../TodoItemsCounter/TodoItemsCounter";
import styles from "./MainFooter.module.css";

export const MainFooter = ({ categories, todoItemsCounter, activeCategory, changeCategory, clearCompleted }) => {
  return (
    <footer className={styles.main__footer}>
      <TodoItemsCounter todoItemsCounter={todoItemsCounter} />
      <CategoryNavigation categories={categories} activeCategory={activeCategory} changeCategory={changeCategory} />
      <ClearButton clearCompleted={clearCompleted} />
    </footer>
  );
};
