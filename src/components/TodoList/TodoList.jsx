import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";

const TodoList = ({ todoList, activeCategory, setTodoList }) => {
  const [allItems, setAllItems] = useState([]);
  const [activeItems, setActiveItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const actualTodoList =
    activeCategory === "active" ? activeItems : activeCategory === "completed" ? completedItems : allItems;

  useEffect(() => {
    setAllItems(todoList);
    setActiveItems(todoList.filter((item) => !item.isCompleted));
    setCompletedItems(todoList.filter((item) => item.isCompleted));
  }, [todoList]);

  const handleReorder = (list) => {
    if (activeCategory === "active") {
      setTodoList([...completedItems, ...list]);
      return;
    }

    if (activeCategory === "completed") {
      setTodoList([...list, ...activeItems]);
      return;
    }

    setTodoList(list);
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleCheck = (e) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === +e.target.dataset.id) {
          item = {
            ...item,
            isCompleted: e.target.checked,
          };
        }

        return item;
      })
    );
  };

  return (
    <Reorder.Group
      axis="y"
      values={todoList}
      onReorder={handleReorder}
      className={styles.todoList}
      layout
      animate={{
        height: `${actualTodoList.length * 50}px`,
      }}
    >
      {actualTodoList.map((item) => (
        <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} handleCheck={handleCheck} />
      ))}
    </Reorder.Group>
  );
};

export default TodoList;
