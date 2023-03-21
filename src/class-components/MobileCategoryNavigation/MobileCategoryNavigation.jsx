import React, { Component } from "react";
import CategoryLink from "../CategoryLink/CategoryLink";
import styles from "./MobileCategoryNavigation.module.css";

export default class MobileCategoryNavigation extends Component {
  render() {
    return (
      <nav className={styles.mobileCategoryNavigation}>
        <ul>
          {this.props.categories.map((category, i) => (
            <CategoryLink
              key={i}
              categoryName={category}
              classNames={category === this.props.activeCategory ? ["mobileLink", "mobileLink_active"] : ["mobileLink"]}
            />
          ))}
        </ul>
      </nav>
    );
  }
}
