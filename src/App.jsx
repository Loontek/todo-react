import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainFooter } from "./components/MainFooter/MainFooter";
import { MobileCategoryNavigation } from "./components/MobileCategoryNavigation/MobileCategoryNavigation";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  const categories = ["All", "Active", "Completed"];
  const [theme, setTheme] = useState("Dark");
  const [todoInputValue, setTodoInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoItemsCounter, setTodoItemsCounter] = useState(0);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const themes = {
    dark: {
      colors: {
        "--main-background": "hsl(235, 21%, 11%)",
        "--todo-background": "hsl(235, 24%, 19%)",
        "--white": "hsl(0, 100%, 100%)",
        "--gradient": "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        "--main-text": "hsl(234, 39%, 85%)",
        "--main-text-hover": "hsl(236, 33%, 92%)",
        "--second-text": "hsl(234, 11%, 52%)",
        "--footer-text": "hsl(234, 11%, 52%)",
        "--placeholder": "hsl(234, 11%, 52%)",
        "--border": "hsl(234, 11%, 52%)",
        "--outline": "hsl(234, 11%, 52%)",
        "--shadow": "hsl(240, 20%, 8%)",
        "--active-link": "hsl(220, 98%, 61%)",
      },
    },
    light: {
      colors: {
        "--main-background": "hsl(0, 0%, 98%)",
        "--todo-background": "hsl(0, 100%, 100%)",
        "--white": "hsl(0, 100%, 100%)",
        "--gradient": "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        "--main-text": "hsl(235, 19%, 35%)",
        "--main-text-hover": "hsl(237, 14%, 30%)",
        "--second-text": "hsl(233, 11%, 84%)",
        "--footer-text": "hsl(236, 9%, 61%)",
        "--placeholder": "hsl(236, 9%, 61%)",
        "--border": "hsl(233, 11%, 84%)",
        "--outline": "hsl(233, 11%, 84%)",
        "--shadow": "hsl(235, 32%, 92%)",
        "--active-link": "hsl(220, 98%, 61%)",
      },
    },
  };

  useEffect(() => {
    setTodoItemsCounter(todoList.filter((item) => !item.isCompleted).length);
  }, [todoList]);

  useEffect(() => {
    const root = document.querySelector(":root");

    switch (theme) {
      case "Dark":
        for (let key in themes.dark.colors) {
          root.style.setProperty(key, themes.dark.colors[key]);
        }

        // localStorage.setItem("theme", "dark");
        break;
      case "Light":
        for (let key in themes.light.colors) {
          root.style.setProperty(key, themes.light.colors[key]);
        }

        // localStorage.setItem("theme", "light");
        break;
    }
  }, [theme]);

  const handleInput = (e) => {
    setTodoInputValue(e.target.value);
  };

  const addTodo = () => {
    if (todoInputValue === "") return;

    const todoItem = {
      id: Date.now(),
      value: todoInputValue,
      isCompleted: false,
    };

    setTodoList([...todoList, todoItem]);
    setTodoInputValue("");
  };

  const deleteTodo = (e) => {
    if (e.target.tagName === "IMG") {
      setTodoList(todoList.filter((item) => item.id !== +e.target.parentNode.dataset.id));
      return;
    }

    if (e.target.tagName === "BUTTON") {
      setTodoList(todoList.filter((item) => item.id !== +e.target.dataset.id));
      return;
    }
  };

  const handleCheck = (e) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === +e.target.dataset.id) {
          item = {
            ...item,
            isCompleted: e.target.checked,
          };
        }

        return item;
      })
    );
  };

  const changeCategory = (e) => {
    if (e.target.tagName === "A") setActiveCategory(e.target.dataset.category);
  };

  const clearCompleted = () => {
    setTodoList(todoList.filter((item) => !item.isCompleted));
  };

  const changeTheme = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };
  // console.log(todoList);

  return (
    <div className={`${styles.App} ${styles[`App${theme}`]}`}>
      <Container>
        <Header theme={theme} changeTheme={changeTheme} />
        <TodoInput todoInputValue={todoInputValue} handleInput={handleInput} addTodo={addTodo} />
        <main className={styles.main}>
          <TodoList
            todoList={todoList}
            deleteTodo={deleteTodo}
            handleCheck={handleCheck}
            activeCategory={activeCategory}
            categories={categories}
          />
          <MainFooter
            categories={categories}
            todoItemsCounter={todoItemsCounter}
            activeCategory={activeCategory}
            changeCategory={changeCategory}
            clearCompleted={clearCompleted}
          />
          <MobileCategoryNavigation
            categories={categories}
            activeCategory={activeCategory}
            changeCategory={changeCategory}
          />
        </main>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
