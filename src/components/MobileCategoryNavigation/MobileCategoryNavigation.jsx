import { CategoryLink } from "../CategoryLink/CategoryLink";
import styles from "./MobileCategoryNavigation.module.css";

export const MobileCategoryNavigation = ({ categories }) => {
  return (
    <nav className={styles.MobileCategoryNavigation}>
      <ul>
        {categories.map((category, i) => (
          <CategoryLink key={i} categoryName={category} className={"MobileLink"} />
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
