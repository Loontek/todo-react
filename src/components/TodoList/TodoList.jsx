import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import { Reorder } from "framer-motion";

export const TodoList = ({ todoList, deleteTodo, handleCheck, activeCategory, setTodoList }) => {
  const active = todoList.filter((item) => !item.isCompleted);
  const completed = todoList.filter((item) => item.isCompleted);
  const all = todoList;
  const todoLists = {
    All: todoList,
    Active: todoList.filter((item) => !item.isCompleted),
    Completed: todoList.filter((item) => item.isCompleted),
  };

  const handleReorder = (list) => {
    if (activeCategory === "Active") {
      setTodoList([...completed, ...list]);
      return;
    }

    if (activeCategory === "Completed") {
      setTodoList([...list, ...active]);
      return;
    }

    setTodoList(list);
  };

  return (
    <Reorder.Group
      axis="y"
      values={todoList}
      onReorder={handleReorder}
      className={styles.TodoList}
      layout
      animate={{ height: `${todoLists[activeCategory].length * 50}px` }}
    >
      {todoLists[activeCategory].map((item) => (
        <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} handleCheck={handleCheck} />
      ))}
    </Reorder.Group>
  );
};
