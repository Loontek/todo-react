import { CategoryLink } from "../CategoryLink/CategoryLink";
import styles from "./MobileCategoryNavigation.module.css";

export const MobileCategoryNavigation = ({ categories, activeCategory, changeCategory }) => {
  return (
    <nav className={styles.MobileCategoryNavigation} onClick={changeCategory}>
      <ul>
        {categories.map((category, i) => (
          <CategoryLink
            key={i}
            categoryName={category}
            className={category === activeCategory ? "MobileLink MobileLink_active" : "MobileLink"}
          />
        ))}
      </ul>
    </nav>
  );
};
