import styles from "./TodoItemsCounter.module.css";

export const TodoItemsCounter = ({ todoItemsCounter }) => {
  return <span className={styles.todoItemCounter}>{todoItemsCounter} items left</span>;
};
