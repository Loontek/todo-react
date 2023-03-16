import styles from "./CategoryLink.module.css";

export const CategoryLink = ({ categoryName, className }) => {
  const classNames = className.split(" ").map((className) => `${styles[className]}`);

  return (
    <li>
      <a className={classNames.join(" ")} href="#" data-category={categoryName}>
        {categoryName}
      </a>
    </li>
  );
};
