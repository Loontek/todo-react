import styles from "./CategoryLink.module.css";

const CategoryLink = ({ categoryName, classNames, changeCategory }) => {
  return (
    <li>
      <a
        className={classNames.map((cl) => styles[cl]).join(" ")}
        href="#"
        data-category={categoryName}
        onClick={changeCategory}
      >
        {`${categoryName[0].toUpperCase()}${categoryName.slice(1)}`}
      </a>
    </li>
  );
};

export default CategoryLink;
