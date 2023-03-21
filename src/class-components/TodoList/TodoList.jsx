import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import { Reorder } from "framer-motion";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allItems: [],
      activeItems: [],
      completedItems: [],
    };

    this.actualTodoList =
      this.props.activeCategory === "active"
        ? this.state.activeItems
        : this.props.activeCategory === "completed"
        ? this.state.completedItems
        : this.state.allItems;

    this.handleReorder = this.handleReorder.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      allItems: [...this.props.todoList],
      activeItems: [...this.props.todoList].filter((item) => !item.isCompleted),
      completedItems: [...this.props.todoList].filter((item) => item.isCompleted),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.todoList !== this.props.todoList) {
      this.setState({
        ...this.state,
        allItems: [...this.props.todoList],
        activeItems: [...this.props.todoList].filter((item) => !item.isCompleted),
        completedItems: [...this.props.todoList].filter((item) => item.isCompleted),
      });
    }
  }

  handleReorder(list) {
    if (this.props.activeCategory === "active") {
      this.props.setTodoList([...completedItems, ...list]);
      return;
    }

    if (this.props.activeCategory === "completed") {
      this.props.setTodoList([...list, ...activeItems]);
      return;
    }

    this.props.setTodoList([...list]);
  }

  deleteTodo(id) {
    this.props.setTodoList([...this.props.todoList].filter((item) => item.id !== id));
  }

  handleCheck(e) {
    this.props.setTodoList(
      [...this.props.todoList].map((item) => {
        if (item.id === +e.target.dataset.id) {
          item = {
            ...item,
            isCompleted: e.target.checked,
          };
        }
        return item;
      })
    );
  }

  render() {
    return (
      <Reorder.Group
        axis="y"
        values={this.props.todoList}
        onReorder={this.handleReorder}
        className={styles.todoList}
        layout
        animate={{
          height: `${
            (this.props.activeCategory === "active"
              ? this.state.activeItems
              : this.props.activeCategory === "completed"
              ? this.state.completedItems
              : this.state.allItems
            ).length * 50
          }px`,
        }}
      >
        {(this.props.activeCategory === "active"
          ? this.state.activeItems
          : this.props.activeCategory === "completed"
          ? this.state.completedItems
          : this.state.allItems
        ).map((item) => (
          <TodoItem key={item.id} item={item} deleteTodo={this.deleteTodo} handleCheck={this.handleCheck} />
        ))}
      </Reorder.Group>
    );
  }
}
