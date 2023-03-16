import styles from "./TodoInput.module.css";

export const TodoInput = ({ todoInputValue, handleInput, addTodo }) => {
  return (
    <div className={styles.TodoInput}>
      <label></label>
      <input
        className={styles.todoValue}
        type="text"
        placeholder="Create a new todo..."
        value={todoInputValue}
        onInput={handleInput}
      />
      <button className={styles.addBtn} onClick={addTodo}>
        Add
      </button>
    </div>
  );
};
