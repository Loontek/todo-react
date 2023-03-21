import React, { Component } from "react";
import CategoryLink from "../CategoryLink/CategoryLink";
import styles from "./CategoryNavigation.module.css";

export default class CategoryNavigation extends Component {
  render() {
    return (
      <nav className={styles.categoryNavigation}>
        <ul>
          {this.props.categories.map((category, i) => (
            <CategoryLink
              key={i}
              categoryName={category}
              classNames={
                category === this.props.activeCategory ? ["desktopLink", "desktopLink_active"] : ["desktopLink"]
              }
              changeCategory={this.props.changeCategory}
            />
          ))}
        </ul>
      </nav>
    );
  }
}
