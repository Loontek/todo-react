import React, { Component } from "react";
import styles from "./TodoInput.module.css";

export default class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInputValue: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInput(e) {
    const todoInputValue = e.target.value;

    this.setState({
      ...this.state,
      todoInputValue,
    });
  }

  handleClick() {
    if (!this.state.todoInputValue) return;

    this.props.addTodo(this.state.todoInputValue);

    this.setState({
      ...this.state,
      todoInputValue: "",
    });
  }

  handleKeyPress(e) {
    if (e.key !== "Enter" || !this.state.todoInputValue) return;

    this.props.addTodo(this.state.todoInputValue);

    this.setState({
      ...this.state,
      todoInputValue: "",
    });
  }

  render() {
    return (
      <div className={styles.todoInput} onKeyPress={this.handleKeyPress} tabIndex={1}>
        <label></label>
        <input
          className={styles.todoValue}
          type="text"
          placeholder="Create a new todo..."
          value={this.state.todoInputValue}
          onInput={this.handleInput}
        />
        <button className={styles.addBtn} onClick={this.handleClick} disabled={!this.state.todoInputValue}>
          Add
        </button>
      </div>
    );
  }
}
