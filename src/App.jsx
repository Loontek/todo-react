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
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : "Dark"
  );
  const [todoInputValue, setTodoInputValue] = useState("");
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : []
  );
  const [todoItemsCounter, setTodoItemsCounter] = useState(0);
  const [activeCategory, setActiveCategory] = useState(
    localStorage.getItem("activeCategory") ? JSON.parse(localStorage.getItem("activeCategory")) : categories[0]
  );

  useEffect(() => {
    localStorage.setItem("activeCategory", JSON.stringify(activeCategory));
  }, [activeCategory]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    setTodoItemsCounter(todoList.filter((item) => !item.isCompleted).length);
  }, [todoList]);

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

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
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

  const toggleTheme = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };

  return (
    <div className={`${styles.App}`} data-theme={theme}>
      <Container>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <TodoInput todoInputValue={todoInputValue} handleInput={handleInput} addTodo={addTodo} />
        <main className={styles.main}>
          <TodoList
            todoList={todoList}
            deleteTodo={deleteTodo}
            handleCheck={handleCheck}
            activeCategory={activeCategory}
            categories={categories}
            setTodoList={setTodoList}
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
