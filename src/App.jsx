import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 0, todoName: "Task 1", isChecked: false },
    { id: 1, todoName: "Task 2", isChecked: false },
    { id: 2, todoName: "Task 3", isChecked: false },
    { id: 3, todoName: "Task 4", isChecked: false },
  ]);

  return (
    <>
      <Header />
      <main>
        <TodoList todos={todos} />
      </main>
      <Footer />
    </>
  );
};

export default App;
