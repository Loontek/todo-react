import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export const TodoList = ({ todoList, deleteTodo, handleCheck, activeCategory, categories }) => {
  const active = todoList.filter((item) => !item.isCompleted);
  const completed = todoList.filter((item) => item.isCompleted);

  todoList = activeCategory === categories[0] ? todoList : activeCategory === categories[1] ? active : completed;

  return (
    <ul className={styles.TodoList}>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} handleCheck={handleCheck} />
      ))}
    </ul>
  );
};
