import { Reorder } from "framer-motion";
import styles from "./TodoItem.module.css";

export const TodoItem = ({ item, deleteTodo, handleCheck }) => {
  return (
    <Reorder.Item value={item} className={styles.todoItem} initial={false} draggable>
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
      <button
        className={styles.delBtn}
        data-id={item.id}
        title="Delete todo button"
        onClick={() => deleteTodo(item.id)}
      >
        <img src="./img/icon-cross.svg" alt="Delete button" />
      </button>
    </Reorder.Item>
  );
};
