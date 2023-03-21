import React, { Component } from "react";
import styles from "./Main.module.css";
import MainFooter from "../MainFooter/MainFooter";
import MobileCategoryNavigation from "../MobileCategoryNavigation/MobileCategoryNavigation";
import TodoList from "../TodoList/TodoList";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.categories = ["all", "active", "completed"];

    this.state = {
      activeCategory: "",
    };

    this.changeCategory = this.changeCategory.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  componentDidMount() {
    const activeCategory = JSON.parse(localStorage.getItem("activeCategory"))
      ? JSON.parse(localStorage.getItem("activeCategory"))
      : "all";

    this.setState({
      ...this.state,
      activeCategory,
    });
  }

  componentDidUpdate() {
    if (!this.state.activeCategory) return;

    localStorage.setItem("activeCategory", JSON.stringify(this.state.activeCategory));
  }

  changeCategory(e) {
    const activeCategory = e.target.dataset.category;

    this.setState({
      ...this.state,
      activeCategory,
    });
  }

  clearCompleted() {
    this.props.setTodoList([...this.props.todoList].filter((item) => !item.isCompleted));
  }

  render() {
    return (
      <main className={styles.main}>
        <TodoList
          todoList={this.props.todoList}
          activeCategory={this.state.activeCategory}
          setTodoList={this.props.setTodoList}
        />
        <MainFooter
          categories={this.categories}
          todoList={this.props.todoList}
          activeCategory={this.state.activeCategory}
          changeCategory={this.changeCategory}
          clearCompleted={this.clearCompleted}
        />
        <MobileCategoryNavigation
          categories={this.categories}
          activeCategory={this.state.activeCategory}
          changeCategory={this.changeCategory}
        />
      </main>
    );
  }
}
