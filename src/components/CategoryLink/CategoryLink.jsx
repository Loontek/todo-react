import styles from "./CategoryLink.module.css";

export const CategoryLink = ({ categoryName, className }) => {
  //   console.log(styles);
  return (
    <li>
      <a className={styles[className]} href="#">
        {categoryName}
      </a>
    </li>
  );
};
