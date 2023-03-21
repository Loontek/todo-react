import { useState } from "react";
import styles from "./TodoInput.module.css";

const TodoInput = ({ addTodo }) => {
  const [todoInputValue, setTodoInputValue] = useState("");

  const handleInput = (e) => {
    setTodoInputValue(e.target.value);
  };

  const handleClick = () => {
    if (!todoInputValue) return;

    addTodo(todoInputValue);

    setTodoInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key !== "Enter" || !todoInputValue) return;

    addTodo(todoInputValue);

    setTodoInputValue("");
  };

  return (
    <div className={styles.todoInput} onKeyPress={handleKeyPress} tabIndex={1}>
      <label></label>
      <input
        className={styles.todoValue}
        type="text"
        placeholder="Create a new todo..."
        value={todoInputValue}
        onInput={handleInput}
      />
      <button className={styles.addBtn} onClick={handleClick} disabled={!todoInputValue}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
