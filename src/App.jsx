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

  return (
    <div className={`${styles.App}`} data-theme={theme}>
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
