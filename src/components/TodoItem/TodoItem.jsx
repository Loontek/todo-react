import styles from "./TodoItem.module.css";

export const TodoItem = ({ item, deleteTodo, handleCheck }) => {
  return (
    <li className={styles.todoItem} data-id={item.id} draggable="true" onClick={deleteTodo}>
      <input
        className={styles.checkbox}
        id={`todo-item__checkbox_${item.id}`}
        data-id={item.id}
        type="checkbox"
        onChange={handleCheck}
        checked={item.isCompleted}
      />
      <label htmlFor={`todo-item__checkbox_${item.id}`}></label>
      <p className={styles.text}>{item.value}</p>
      <button className={styles.delBtn} data-id={item.id} title="Delete todo button">
        <img src="./img/icon-cross.svg" alt="Delete button" />
      </button>
    </li>
  );
};
