import styles from "./ClearButton.module.css";

const ClearButton = ({ clearCompleted }) => {
  return (
    <button className={styles.clearBtn} type="button" title="Clear completed button" onClick={clearCompleted}>
      Clear Completed
    </button>
  );
};

export default ClearButton;
