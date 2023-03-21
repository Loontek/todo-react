import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import MainFooter from "../MainFooter/MainFooter";
import MobileCategoryNavigation from "../MobileCategoryNavigation/MobileCategoryNavigation";
import TodoList from "../TodoList/TodoList";

const Main = ({ todoList, setTodoList }) => {
  const categories = ["all", "active", "completed"];
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    setActiveCategory(
      JSON.parse(localStorage.getItem("activeCategory")) ? JSON.parse(localStorage.getItem("activeCategory")) : "all"
    );
  }, []);

  useEffect(() => {
    if (!activeCategory) return;

    localStorage.setItem("activeCategory", JSON.stringify(activeCategory));
  }, [activeCategory]);

  const changeCategory = (e) => {
    setActiveCategory(e.target.dataset.category);
  };

  const clearCompleted = () => {
    setTodoList(todoList.filter((item) => !item.isCompleted));
  };

  return (
    <main className={styles.main}>
      <TodoList todoList={todoList} activeCategory={activeCategory} setTodoList={setTodoList} />
      <MainFooter
        categories={categories}
        todoList={todoList}
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
  );
};

export default Main;
