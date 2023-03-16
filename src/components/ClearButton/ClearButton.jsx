import styles from "./ClearButton.module.css";

export const ClearButton = () => {
  return (
    <button className={styles.ClearBtn} type="button" title="Clear completed button">
      Clear Completed
    </button>
  );
};
