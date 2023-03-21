import React, { Component } from "react";
import styles from "./CategoryLink.module.css";

export default class CategoryLink extends Component {
  render() {
    return (
      <li>
        <a
          className={this.props.classNames.map((cl) => styles[cl]).join(" ")}
          href="#"
          data-category={this.props.categoryName}
          onClick={this.props.changeCategory}
        >
          {`${this.props.categoryName[0].toUpperCase()}${this.props.categoryName.slice(1)}`}
        </a>
      </li>
    );
  }
}
