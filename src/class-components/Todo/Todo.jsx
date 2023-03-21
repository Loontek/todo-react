import React, { Component } from "react";
import styles from "./Todo.module.css";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import TodoInput from "../TodoInput/TodoInput";

export default class ClassTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "",
      todoList: [],
    };

    this.toggleTheme = this.toggleTheme.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.setTodoList = this.setTodoList.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      theme: JSON.parse(localStorage.getItem("theme")) ? JSON.parse(localStorage.getItem("theme")) : "dark",
      todoList: JSON.parse(localStorage.getItem("todoList")) ? JSON.parse(localStorage.getItem("todoList")) : [],
    });
  }

  componentDidUpdate() {
    localStorage.setItem("todoList", JSON.stringify(this.state.todoList));

    if (!this.state.theme) return;
    localStorage.setItem("theme", JSON.stringify(this.state.theme));
  }

  addTodo(value) {
    const todoItem = {
      id: Date.now(),
      value,
      isCompleted: false,
    };

    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, todoItem],
    });
  }

  toggleTheme() {
    this.setState({
      ...this.state,
      theme: this.state.theme === "dark" ? "light" : "dark",
    });
  }

  setTodoList(todoList) {
    this.setState({
      ...this.state,
      todoList,
    });
  }

  render() {
    return (
      <div className={`${styles.todo}`} data-theme={this.state.theme}>
        <Container>
          <Header theme={this.state.theme} toggleTheme={this.toggleTheme} />
          <TodoInput addTodo={this.addTodo} />
          <Main todoList={this.state.todoList} setTodoList={this.setTodoList} />
          <Footer />
        </Container>
      </div>
    );
  }
}
