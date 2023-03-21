import React, { Component } from "react";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";
import ClearButton from "../ClearButton/ClearButton";
import TodoItemsCounter from "../TodoItemsCounter/TodoItemsCounter";
import styles from "./MainFooter.module.css";

export default class MainFooter extends Component {
  render() {
    return (
      <footer className={styles.mainFooter}>
        <TodoItemsCounter todoList={this.props.todoList} />
        <CategoryNavigation
          categories={this.props.categories}
          activeCategory={this.props.activeCategory}
          changeCategory={this.props.changeCategory}
        />
        <ClearButton clearCompleted={this.props.clearCompleted} />
      </footer>
    );
  }
}
