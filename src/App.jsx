import { useState } from "react";
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

  return (
    <div className={`${styles.App} ${styles[`App${theme}`]}`}>
      <Container>
        <Header setTheme={setTheme} />
        <TodoInput />
        <main className={styles.main}>
          <TodoList />
          <MainFooter categories={categories} />
          <MobileCategoryNavigation categories={categories} />
        </main>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
