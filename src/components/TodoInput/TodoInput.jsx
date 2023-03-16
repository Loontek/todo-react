import styles from "./TodoInput.module.css";

export const TodoInput = () => {
  return (
    <div className={styles.TodoInput}>
      {/* <button class={styles.addBtn} id="addBtn" title="Add todo button"></button> */}
      <label></label>
      <input className={styles.todoValue} type="text" placeholder="Create a new todo..." />
      <button className={styles.addBtn}>Add</button>
    </div>
  );
};
