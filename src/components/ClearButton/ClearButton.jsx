import styles from "./ClearButton.module.css";

export const ClearButton = ({ clearCompleted }) => {
  return (
    <button className={styles.ClearBtn} type="button" title="Clear completed button" onClick={clearCompleted}>
      Clear Completed
    </button>
  );
};
