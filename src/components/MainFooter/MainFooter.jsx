import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";
import ClearButton from "../ClearButton/ClearButton";
import TodoItemsCounter from "../TodoItemsCounter/TodoItemsCounter";
import styles from "./MainFooter.module.css";

const MainFooter = ({ categories, todoList, activeCategory, changeCategory, clearCompleted }) => {
  return (
    <footer className={styles.mainFooter}>
      <TodoItemsCounter todoList={todoList} />
      <CategoryNavigation categories={categories} activeCategory={activeCategory} changeCategory={changeCategory} />
      <ClearButton clearCompleted={clearCompleted} />
    </footer>
  );
};

export default MainFooter;
