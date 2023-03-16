import { CategoryLink } from "../CategoryLink/CategoryLink";
import styles from "./CategoryNavigation.module.css";

export const CategoryNavigation = ({ categories, activeCategory, changeCategory }) => {
  return (
    <nav className={styles.CategoryNavigation} onClick={changeCategory}>
      <ul>
        {categories.map((category, i) => (
          <CategoryLink
            key={i}
            categoryName={category}
            className={category === activeCategory ? "DesktopLink DesktopLink_active" : "DesktopLink"}
          />
        ))}
        {/* <li>
          <a className={styles.main__link_active} data-category="all" href="#">
            All
          </a>
        </li>
        <li>
          <a className={styles.main__link} data-category="active" href="#">
            Active
          </a>
        </li>
        <li>
          <a className={styles.main__link} data-category="completed" href="#">
            Completed
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
