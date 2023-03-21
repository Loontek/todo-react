import CategoryLink from "../CategoryLink/CategoryLink";
import styles from "./MobileCategoryNavigation.module.css";

const MobileCategoryNavigation = ({ categories, activeCategory }) => {
  return (
    <nav className={styles.mobileCategoryNavigation}>
      <ul>
        {categories.map((category, i) => (
          <CategoryLink
            key={i}
            categoryName={category}
            classNames={category === activeCategory ? ["mobileLink", "mobileLink_active"] : ["mobileLink"]}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MobileCategoryNavigation;
