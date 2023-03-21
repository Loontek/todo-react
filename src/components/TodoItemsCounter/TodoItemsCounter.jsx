import { useEffect, useState } from "react";
import styles from "./TodoItemsCounter.module.css";

const TodoItemsCounter = ({ todoList }) => {
  const [todoItemsCounter, setTodoItemsCounter] = useState(0);

  useEffect(() => {
    setTodoItemsCounter(todoList.filter((item) => !item.isCompleted).length);
  }, [todoList]);

  return <span className={styles.todoItemCounter}>{todoItemsCounter} items left</span>;
};

export default TodoItemsCounter;
