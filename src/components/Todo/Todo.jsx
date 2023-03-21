import styles from "./Todo.module.css";
import { useEffect, useId, useState } from "react";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import TodoInput from "../TodoInput/TodoInput";

const Todo = () => {
  const [theme, setTheme] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("theme")) ? JSON.parse(localStorage.getItem("theme")) : "dark");
    setTodoList(JSON.parse(localStorage.getItem("todoList")) ? JSON.parse(localStorage.getItem("todoList")) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    if (!theme) return;

    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const addTodo = (value) => {
    const todoItem = {
      id: Date.now(),
      value,
      isCompleted: false,
    };

    setTodoList([...todoList, todoItem]);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`${styles.todo}`} data-theme={theme}>
      <Container>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <TodoInput addTodo={addTodo} />
        <Main todoList={todoList} setTodoList={setTodoList} />
        <Footer />
      </Container>
    </div>
  );
};

export default Todo;
