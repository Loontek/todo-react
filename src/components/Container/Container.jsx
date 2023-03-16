import styles from "./Container.module.css";

export const Container = (props) => {
  return <div className={styles.Container}>{props.children}</div>;
};
