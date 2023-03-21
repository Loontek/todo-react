import CategoryLink from "../CategoryLink/CategoryLink";
import styles from "./CategoryNavigation.module.css";

const CategoryNavigation = ({ categories, activeCategory, changeCategory }) => {
  return (
    <nav className={styles.categoryNavigation}>
      <ul>
        {categories.map((category, i) => (
          <CategoryLink
            key={i}
            categoryName={category}
            classNames={category === activeCategory ? ["desktopLink", "desktopLink_active"] : ["desktopLink"]}
            changeCategory={changeCategory}
          />
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNavigation;
