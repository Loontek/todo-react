import React, { Component } from "react";
import styles from "./TodoItemsCounter.module.css";

export default class TodoItemsCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItemsCounter: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.todoList === this.props.todoList) return;

    const todoItemsCounter = [...this.props.todoList].filter((item) => !item.isCompleted).length;

    this.setState({
      ...this.state,
      todoItemsCounter,
    });
  }

  render() {
    return <span className={styles.todoItemCounter}>{this.state.todoItemsCounter} items left</span>;
  }
}
